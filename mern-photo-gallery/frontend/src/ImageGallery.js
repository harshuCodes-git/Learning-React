import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/images")
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        setImages([...images, response.data]);
        setFile(null);
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <div className="gallery">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.filename} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
