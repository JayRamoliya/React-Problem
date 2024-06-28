const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017';

const connectDB = async () => {
    try {
        console.log('Connecting to database...');
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
