import { useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddImageProps {
  onImageSelect: (images: FileWithPath[]) => void;
}

export const AddImageComp = ({ onImageSelect }: AddImageProps) => {
  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true,
    onDrop: (acceptedFiles: FileWithPath[]) => {
      if (selectedImages.length + acceptedFiles.length > 6) {
        toast.error("Only 6 product images allowed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      const images = [...selectedImages, ...acceptedFiles];
      setSelectedImages(images);
      onImageSelect(images);
    },
  });

  const handleImageClick = (index: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png";
    input.disabled = selectedImages.length >= 6;
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (file) {
        setSelectedImages((prevSelectedImages) => {
          const newSelectedImages = [...prevSelectedImages];
          newSelectedImages[index] = file as FileWithPath;

          return newSelectedImages;
        });
        onImageSelect([...selectedImages]); // sending the updated selected images
      }
    };
    input.click();
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {selectedImages.map((image, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(index)}
          className="cursor-pointer w-full h-full overflow-hidden rounded-[13px]"
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`add_product_${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {selectedImages.length >= 4 ? null : (
        <div {...getRootProps()} className="cursor-pointer overflow-hidden">
          <input {...getInputProps()} disabled={selectedImages.length >= 6} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <img
              src="/images/file-upload.svg"
              alt="new_product"
              className="w-full h-full object-cover rounded-[13px]"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AddImageComp;
