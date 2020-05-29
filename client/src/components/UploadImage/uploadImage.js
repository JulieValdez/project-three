import React from "react";
import "./uploadImage.css";

const UploadImage = (props) => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        className="profilePicContainer"
        onClick={() => imageUploader.current.click()}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none",
          }}
        />
        <img
          ref={uploadedImage}
          width={150}
          height={150}
          style={{ marginLeft: "30%", marginTop: "4rem" }}
        />
      </div>

      <h5 style={{ marginLeft: "20%", marginTop: "1rem" }}>
        Click Box to Upload Pic
      </h5>
    </>
  );
};

export default UploadImage;
