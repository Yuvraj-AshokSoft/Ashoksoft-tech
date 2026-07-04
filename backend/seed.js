// Admin Seed Script
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/User.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const seedAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@ashoksoft.com' });
    
    if (adminExists) {
      console.log('✅ Admin user already exists!');
      console.log('Email: admin@ashoksoft.com');
      console.log('Password: Admin@123');
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name: 'AshokSoft Admin',
      email: 'admin@ashoksoft.com',
      password: 'Admin@123',
      role: 'admin'
    });

    console.log('✅ Admin user created successfully!');
    console.log('\n📧 Admin Credentials:');
    console.log('Email: admin@ashoksoft.com');
    console.log('Password: Admin@123');
    console.log('\n🔐 Please use these credentials to login to the admin dashboard.');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
};

seedAdmin();
