import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// POST: /api/upload
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    const filePath = `/uploads/${req.file.filename}`;
    res.status(200).json({ success: true, imagePath: filePath });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;