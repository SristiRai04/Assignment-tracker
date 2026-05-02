const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/assignments", require("./routes/assignmentRoutes"));
app.use("/api/submissions", require("./routes/submissionRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});