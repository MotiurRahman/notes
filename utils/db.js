const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://testUser:motiur08034@hero-one.z3ku6ig.mongodb.net/notes?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
        process.exit(1);
    }
};

const getDb = mongoose.connection;

module.exports = {
    connectDB,
    getDb,
};
