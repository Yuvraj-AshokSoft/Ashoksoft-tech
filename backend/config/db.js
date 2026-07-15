// Database configuration
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ashoksoft';
    
    // Check if we should use memory server as fallback
    if (uri.includes('127.0.0.1') || uri.includes('localhost')) {
      try {
        const conn = await mongoose.connect(uri, {
          serverSelectionTimeoutMS: 2000 // Fast fail in 2 seconds if local Mongo is not running
        });
        console.log(`✅ MongoDB Connected (Local): ${conn.connection.host}`);
        return conn;
      } catch (localErr) {
        console.log('⚠️ Local MongoDB not found/running on port 27017.');
        console.log('🚀 Starting In-Memory MongoDB Server for development...');
        
        const { MongoMemoryServer } = await import('mongodb-memory-server');
        const mongoServer = await MongoMemoryServer.create({
          binary: {
            version: '4.4.0'
          }
        });
        const mongoUri = mongoServer.getUri();
        
        const conn = await mongoose.connect(mongoUri);
        console.log(`✅ In-Memory MongoDB Connected: ${conn.connection.host}`);
        
        // Seed the admin user if needed
        try {
          const User = (await import('../models/User.js')).default;
          const adminExists = await User.findOne({ email: 'admin@ashoksoft.com' });
          if (!adminExists) {
            await User.create({
              name: 'AshokSoft Admin',
              email: 'admin@ashoksoft.com',
              password: 'Admin@123',
              role: 'admin'
            });
            console.log('✅ Default Admin User seeded in memory!');
            console.log('📧 Email: admin@ashoksoft.com');
            console.log('🔑 Password: Admin@123');
          }
        } catch (seedErr) {
          console.error('⚠️ Failed to auto-seed admin user:', seedErr.message);
        }
        
        return conn;
      }
    } else {
      // Connect to remote MongoDB (e.g. MongoDB Atlas)
      const conn = await mongoose.connect(uri);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return conn;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
