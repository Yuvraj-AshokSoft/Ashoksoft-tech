// Inquiry Model
import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number']
    },
    companyName: {
      type: String,
      required: [true, 'Please provide a company name'],
      trim: true
    },
    projectType: {
      type: String,
      required: [true, 'Please select a project type'],
      enum: [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'AI Automation',
        'Branding',
        'Other'
      ]
    },
    budget: {
      type: String,
      required: [true, 'Please select a budget range'],
      enum: [
        'Rs 500 - Rs 1,000',
        'Rs 1,000 - Rs 2,500',
        'Rs 2,500 - Rs 5,000',
        'Rs 5,000 - Rs 10,000',
        'Rs 10,000+',
        '$5k - $10k',
        '$10k - $25k',
        '$25k - $50k',
        '$50k - $100k',
        '$100k+'
      ]
    },
    timeline: {
      type: String,
      required: [true, 'Please select a timeline'],
      enum: ['1-3 months', '3-6 months', '6-12 months', '12+ months']
    },
    description: {
      type: String,
      required: [true, 'Please provide project description'],
      maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'In Progress', 'Completed', 'Rejected'],
      default: 'Pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model('Inquiry', inquirySchema);
