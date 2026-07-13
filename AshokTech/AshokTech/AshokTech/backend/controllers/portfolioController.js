import Portfolio from '../models/Portfolio.js';

// Get all portfolio items (with filtering)
export const getPortfolioItems = async (req, res) => {
  try {
    const { serviceSlug, category, isActive = true, page = 1, limit = 12 } = req.query;
    const currentPage = Math.max(parseInt(page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(limit, 10) || 12, 1);

    let query = {};

    // Filter by service if provided
    if (serviceSlug) {
      query.serviceSlug = serviceSlug;
    }

    // Filter by category if provided
    if (category) {
      query.category = category;
    }

    // Filter by active status (default: true for public)
    if (isActive) {
      query.isActive = true;
    }

    const total = await Portfolio.countDocuments(query);
    const portfolioItems = await Portfolio.find(query)
      .sort({ sortOrder: 1, createdAt: -1 })
      .limit(pageSize)
      .skip((currentPage - 1) * pageSize)
      .select('-images.imageData'); // Exclude full image data for list view

    res.status(200).json({
      success: true,
      items: portfolioItems,
      pagination: {
        current: currentPage,
        total: Math.ceil(total / pageSize),
        count: portfolioItems.length,
        totalCount: total
      }
    });
  } catch (error) {
    console.error('Get portfolio items error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching portfolio items'
    });
  }
};

// Get single portfolio item by slug
export const getPortfolioBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const portfolio = await Portfolio.findOne({
      slug,
      isActive: true
    });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      item: portfolio
    });
  } catch (error) {
    console.error('Get portfolio by slug error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching portfolio item'
    });
  }
};

// Admin: Create portfolio item
export const createPortfolioItem = async (req, res) => {
  try {
    const { title, description, serviceSlug, price, category, tags, technologies, deliverables } = req.body;

    // Check if portfolio with same slug already exists
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const existing = await Portfolio.findOne({ slug });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Portfolio item with this title already exists'
      });
    }

    const portfolio = await Portfolio.create({
      title,
      slug,
      description,
      serviceSlug,
      price: price || 0,
      category,
      tags: tags || [],
      technologies: technologies || [],
      deliverables: deliverables || [],
      images: []
    });

    res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      item: portfolio
    });
  } catch (error) {
    console.error('Create portfolio item error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating portfolio item'
    });
  }
};

// Admin: Update portfolio item
export const updatePortfolioItem = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, description, price, category, isActive, sortOrder, tags, technologies, deliverables } = req.body;

    const portfolio = await Portfolio.findOne({ slug });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    // Update fields
    if (title) portfolio.title = title;
    if (description) portfolio.description = description;
    if (price !== undefined) portfolio.price = price;
    if (category) portfolio.category = category;
    if (isActive !== undefined) portfolio.isActive = isActive;
    if (sortOrder !== undefined) portfolio.sortOrder = sortOrder;
    if (tags) portfolio.tags = tags;
    if (technologies) portfolio.technologies = technologies;
    if (deliverables) portfolio.deliverables = deliverables;

    await portfolio.save();

    res.status(200).json({
      success: true,
      message: 'Portfolio item updated successfully',
      item: portfolio
    });
  } catch (error) {
    console.error('Update portfolio item error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating portfolio item'
    });
  }
};

// Admin: Add images to portfolio item
export const addPortfolioImages = async (req, res) => {
  try {
    const { slug } = req.params;
    const { images } = req.body; // Array of { imageData, imageName }

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide at least one image'
      });
    }

    const portfolio = await Portfolio.findOne({ slug });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    // Check total size of all images
    const totalSize = images.reduce((sum, img) => sum + (img.imageData?.length || 0), 0);
    if (totalSize > 20 * 1024 * 1024) { // 20MB limit for all images combined
      return res.status(400).json({
        success: false,
        message: 'Total image size exceeds 20MB limit'
      });
    }

    // Add images with order
    const newImages = images.map((img, index) => ({
      imageData: img.imageData,
      imageName: img.imageName,
      order: (portfolio.images.length || 0) + index
    }));

    portfolio.images.push(...newImages);

    // Set thumbnail as first image if not set
    if (!portfolio.thumbnail && portfolio.images.length > 0) {
      portfolio.thumbnail = portfolio.images[0].imageData;
    }

    await portfolio.save();

    res.status(200).json({
      success: true,
      message: 'Images added successfully',
      item: portfolio
    });
  } catch (error) {
    console.error('Add portfolio images error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error adding images'
    });
  }
};

// Admin: Delete image from portfolio
export const deletePortfolioImage = async (req, res) => {
  try {
    const { slug, imageId } = req.params;

    const portfolio = await Portfolio.findOne({ slug });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    portfolio.images = portfolio.images.filter(img => img._id.toString() !== imageId);

    // Update thumbnail if deleted image was thumbnail
    if (portfolio.images.length > 0) {
      portfolio.thumbnail = portfolio.images[0].imageData;
    } else {
      portfolio.thumbnail = '';
    }

    await portfolio.save();

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
      item: portfolio
    });
  } catch (error) {
    console.error('Delete portfolio image error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting image'
    });
  }
};

// Admin: Reorder images
export const reorderPortfolioImages = async (req, res) => {
  try {
    const { slug } = req.params;
    const { imageIds } = req.body; // Array of image IDs in desired order

    if (!imageIds || !Array.isArray(imageIds)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid image order'
      });
    }

    const portfolio = await Portfolio.findOne({ slug });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    // Reorder images based on imageIds array
    const newImages = [];
    imageIds.forEach((imageId, index) => {
      const image = portfolio.images.find(img => img._id.toString() === imageId);
      if (image) {
        image.order = index;
        newImages.push(image);
      }
    });

    portfolio.images = newImages;

    // Update thumbnail as first image
    if (portfolio.images.length > 0) {
      portfolio.thumbnail = portfolio.images[0].imageData;
    }

    await portfolio.save();

    res.status(200).json({
      success: true,
      message: 'Images reordered successfully',
      item: portfolio
    });
  } catch (error) {
    console.error('Reorder portfolio images error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error reordering images'
    });
  }
};

// Admin: Delete portfolio item
export const deletePortfolioItem = async (req, res) => {
  try {
    const { slug } = req.params;

    const portfolio = await Portfolio.findOneAndDelete({ slug });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Portfolio item deleted successfully'
    });
  } catch (error) {
    console.error('Delete portfolio item error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting portfolio item'
    });
  }
};

// Admin: Get all portfolio items (including inactive)
export const getAllPortfolioItems = async (req, res) => {
  try {
    const { page = 1, limit = 10, serviceSlug } = req.query;
    const currentPage = Math.max(parseInt(page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(limit, 10) || 10, 1);

    let query = {};
    if (serviceSlug) {
      query.serviceSlug = serviceSlug;
    }

    const total = await Portfolio.countDocuments(query);
    const items = await Portfolio.find(query)
      .sort({ sortOrder: 1, createdAt: -1 })
      .limit(pageSize)
      .skip((currentPage - 1) * pageSize)
      .select('-images.imageData');

    res.status(200).json({
      success: true,
      items,
      pagination: {
        current: currentPage,
        total: Math.ceil(total / pageSize),
        count: items.length,
        totalCount: total
      }
    });
  } catch (error) {
    console.error('Get all portfolio items error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching portfolio items'
    });
  }
};
