const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected to: ${conn.connection.host}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

module.exports = { connect };
