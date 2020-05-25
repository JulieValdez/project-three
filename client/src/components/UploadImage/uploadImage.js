import React from "react";
import "./uploadImage.css";
import ProfileIcon from "../assets/profileicon.png";
import Figure from "react-bootstrap/Figure";

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
      <div className="profilePicContainer">
        <Figure.Image
          width={150}
          height={150}
          alt="150x150"
          src={ProfileIcon}
          rounded
          style={{ marginLeft: "30%", marginTop: "4rem" }}
          onClick={() => imageUploader.current.click()}
        />
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
          alt="150x150"
          rounded
          style={{ marginLeft: "30%", marginTop: "4rem", zIndex: "500" }}
        />
      </div>
      <h5 style={{ marginLeft: "20%" }}>
        Click above to Upload Your Profile Pic
      </h5>
    </>
  );
};

export default UploadImage;
