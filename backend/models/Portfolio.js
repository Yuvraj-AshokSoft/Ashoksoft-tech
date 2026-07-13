import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a portfolio title'],
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    description: {
      type: String,
      required: [true, 'Please provide a portfolio description'],
      trim: true
    },
    serviceSlug: {
      type: String,
      ref: 'Service',
      required: [true, 'Please select a service']
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      default: 0
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      trim: true
    },
    images: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          auto: true
        },
        imageData: {
          type: String,
          required: true
        },
        imageName: {
          type: String,
          default: ''
        },
        order: {
          type: Number,
          default: 0
        }
      }
    ],
    thumbnail: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true
    },
    sortOrder: {
      type: Number,
      default: 0
    },
    tags: [String],
    technologies: [String],
    deliverables: [String]
  },
  { timestamps: true }
);

export default mongoose.model('Portfolio', portfolioSchema);
