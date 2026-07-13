import Service from '../models/Service.js';

const defaultServices = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Create stunning, responsive websites that engage users and drive conversions with modern technologies.',
    icon: 'code',
    sortOrder: 1
  },
  {
    title: 'App Development',
    slug: 'app-development',
    description: 'Build powerful mobile and web applications tailored to your business needs and user expectations.',
    icon: 'code',
    sortOrder: 2
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Design beautiful, intuitive interfaces that enhance user experience and boost engagement metrics.',
    icon: 'design',
    sortOrder: 3
  },
  {
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Leverage artificial intelligence to automate processes and unlock new business opportunities.',
    icon: 'cpu',
    sortOrder: 4
  },
  {
    title: 'Branding',
    slug: 'branding',
    description: 'Build a strong brand identity that resonates with your target audience and stands out.',
    icon: 'chart',
    sortOrder: 5
  }
];

const ensureDefaultServices = async () => {
  await Promise.all(
    defaultServices.map((service) =>
      Service.findOneAndUpdate(
        { slug: service.slug },
        { $setOnInsert: { ...service, isActive: true } },
        { upsert: true, new: true }
      )
    )
  );
};

export const getServices = async (req, res) => {
  try {
    await ensureDefaultServices();

    const query = req.query.includeInactive === 'true' ? {} : { isActive: true };
    const services = await Service.find(query).sort({ sortOrder: 1, createdAt: 1 });

    res.status(200).json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching services'
    });
  }
};

export const getServiceBySlug = async (req, res) => {
  try {
    await ensureDefaultServices();

    const service = await Service.findOne({
      slug: req.params.slug,
      isActive: true
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      service
    });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching service'
    });
  }
};

export const updateService = async (req, res) => {
  try {
    const { title, description, imageData, imageName, isActive } = req.body;

    const update = {};
    if (title !== undefined) update.title = title.trim();
    if (description !== undefined) update.description = description.trim();
    if (imageData !== undefined) update.imageData = imageData;
    if (imageName !== undefined) update.imageName = imageName;
    if (isActive !== undefined) update.isActive = Boolean(isActive);

    if (update.imageData && update.imageData.length > 2_000_000) {
      return res.status(400).json({
        success: false,
        message: 'Image is too large. Please upload an image under 1.5 MB.'
      });
    }

    const service = await Service.findOneAndUpdate(
      { slug: req.params.slug },
      update,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      service
    });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating service'
    });
  }
};
