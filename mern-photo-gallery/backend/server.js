const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Placeholder array for storing image information
let images = [];

// Load existing images from a JSON file if it exists
const imagesFilePath = path.join(__dirname, "images.json");
if (fs.existsSync(imagesFilePath)) {
  images = JSON.parse(fs.readFileSync(imagesFilePath));
}

// Endpoint to get all images
app.get("/api/images", (req, res) => {
  res.json(images);
});

// Endpoint to upload a new image
app.post("/api/upload", upload.single("image"), (req, res) => {
  const newImage = {
    id: images.length + 1,
    url: `http://localhost:5000/uploads/${req.file.filename}`,
    filename: req.file.filename,
  };
  images.push(newImage);

  // Save the updated image list to the JSON file
  fs.writeFileSync(imagesFilePath, JSON.stringify(images, null, 2));

  res.json(newImage);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
