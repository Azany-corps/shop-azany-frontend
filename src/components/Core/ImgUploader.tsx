import React, { ChangeEvent, useState } from "react";

interface ImageUploadProps {
  onImageUpload: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        onImageUpload(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="image-upload-input"
        className="hidden"
      />
      <label htmlFor="image-upload-input" className="cursor-pointer">
        {/* {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="max-w-full h-full object-cover "
          />
        ) : (
          <div className="">
            <img src="/images/file-upload.svg" alt="image uploader image" />
          </div>
        )} */}

        <div className="">
          <img src="/images/file-upload.svg" alt="image uploader image" />
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
