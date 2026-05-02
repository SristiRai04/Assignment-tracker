const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(
      "mongodb+srv://sristirai:1234@cluster0.6xd6cmh.mongodb.net/assignmentDB?retryWrites=true&w=majority&tls=true&family=4"
    );

    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.log("❌ DB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;