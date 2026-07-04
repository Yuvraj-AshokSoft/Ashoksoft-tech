// Admin Controller
import User from '../models/User.js';
import Inquiry from '../models/Inquiry.js';

// Get Dashboard Stats
export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalInquiries = await Inquiry.countDocuments();
    const pendingProjects = await Inquiry.countDocuments({ status: 'Pending' });
    const completedProjects = await Inquiry.countDocuments({ status: 'Completed' });

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalInquiries,
        pendingProjects,
        completedProjects
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching stats'
    });
  }
};

// Get All Inquiries
export const getAllInquiries = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const currentPage = Math.max(parseInt(page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(limit, 10) || 10, 1);

    let query = {};
    if (status) {
      query.status = status;
    }

    const inquiries = await Inquiry.find(query)
      .populate('userId', 'name email role createdAt')
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize);

    const total = await Inquiry.countDocuments(query);

    res.status(200).json({
      success: true,
      count: inquiries.length,
      total,
      pages: Math.ceil(total / pageSize),
      inquiries
    });
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching inquiries'
    });
  }
};

// Update Inquiry Status
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a status'
      });
    }

    const validStatuses = ['Pending', 'Reviewed', 'In Progress', 'Completed', 'Rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry status updated successfully',
      inquiry
    });
  } catch (error) {
    console.error('Update inquiry error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating inquiry'
    });
  }
};

// Delete Inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully'
    });
  } catch (error) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting inquiry'
    });
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const currentPage = Math.max(parseInt(page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(limit, 10) || 10, 1);

    const users = await User.find({ role: 'user' })
      .select('-password')
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .lean();

    const userIds = users.map((user) => user._id);
    const inquiryDetails = await Inquiry.aggregate([
      { $match: { userId: { $in: userIds } } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: '$userId',
          inquiryCount: { $sum: 1 },
          latestInquiry: { $first: '$$ROOT' }
        }
      }
    ]);

    const inquiryDetailsByUser = new Map(
      inquiryDetails.map((detail) => [detail._id.toString(), detail])
    );

    const usersWithInquiryDetails = users.map((account) => {
      const detail = inquiryDetailsByUser.get(account._id.toString());

      return {
        ...account,
        inquiryCount: detail?.inquiryCount || 0,
        latestInquiry: detail?.latestInquiry
          ? {
              phone: detail.latestInquiry.phone,
              companyName: detail.latestInquiry.companyName,
              projectType: detail.latestInquiry.projectType,
              budget: detail.latestInquiry.budget,
              timeline: detail.latestInquiry.timeline,
              status: detail.latestInquiry.status,
              createdAt: detail.latestInquiry.createdAt
            }
          : null
      };
    });

    const total = await User.countDocuments({ role: 'user' });

    res.status(200).json({
      success: true,
      count: usersWithInquiryDetails.length,
      total,
      pages: Math.ceil(total / pageSize),
      users: usersWithInquiryDetails
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching users'
    });
  }
};

// Get Inquiry Statistics
export const getInquiryStats = async (req, res) => {
  try {
    const stats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const projectTypeStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$projectType',
          count: { $sum: 1 }
        }
      }
    ]);

    const budgetStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$budget',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        byStatus: stats,
        byProjectType: projectTypeStats,
        byBudget: budgetStats
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching statistics'
    });
  }
};
