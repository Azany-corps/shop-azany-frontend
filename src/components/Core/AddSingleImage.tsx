import { useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddSingleImageProps {
  onImageSelect: (images: FileWithPath[]) => void;
}

export const AddSingleImageComp = ({ onImageSelect }: AddSingleImageProps) => {
  const [selectedImage, setSelectedImage] = useState<FileWithPath | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: false,
    onDrop: (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0) {
        const image = acceptedFiles[0];
        setSelectedImage(image);
        onImageSelect([image]);
      } else {
        toast.error("Please select a valid image file", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png";
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (file) {
        setSelectedImage(file as FileWithPath);
        onImageSelect([file as FileWithPath]);
      }
    };
    input.click();
  };

  return (
    <div
      className="cursor-pointer w-full h-full overflow-hidden rounded-[13px]"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <img
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : "/images/variation-uploader.svg"
          }
          alt="selected_product_image"
          className="w-full h-full object-cover rounded-[13px]"
          onClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default AddSingleImageComp;
