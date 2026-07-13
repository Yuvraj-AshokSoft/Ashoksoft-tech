import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ashoksoft';

mongoose.connect(uri).then(async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@ashoksoft.com' });
    
    if (adminExists) {
      console.log('Found existing admin user. Forcing password reset...');
      adminExists.password = 'Admin@123';
      adminExists.role = 'admin';
      await adminExists.save();
      console.log('Admin password successfully reset to: Admin@123');
    } else {
      console.log('Admin user does not exist. Creating anew...');
      await User.create({
        name: 'AshokSoft Admin',
        email: 'admin@ashoksoft.com',
        password: 'Admin@123',
        role: 'admin'
      });
      console.log('Admin user created successfully with password: Admin@123');
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit(0);
  }
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
