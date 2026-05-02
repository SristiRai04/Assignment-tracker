const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");

// SUBMIT
router.post("/:assignmentId", async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.assignmentId);

    if (!assignment) {
      return res.status(404).json({ msg: "Assignment not found" });
    }

    if (new Date() > assignment.dueDate) {
      return res.status(400).json({ msg: "Deadline passed" });
    }

    const submission = await Submission.create({
      studentName: req.body.studentName,
      content: req.body.content,
      assignmentId: assignment._id
    });

    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET SUBMISSIONS
router.get("/:assignmentId", async (req, res) => {
  try {
    const submissions = await Submission.find({
      assignmentId: req.params.assignmentId
    });

    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;