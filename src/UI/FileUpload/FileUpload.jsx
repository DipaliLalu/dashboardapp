import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUpload({ value, onChange }) {
    const onDrop = useCallback((acceptedFiles) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        onChange(file);
      }
    }, [onChange]);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
    });
    // console.log(value)
    return (
      <div
        {...getRootProps({
          onDrop: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onDrop(e.dataTransfer.files);
          },
        })}
        className="bg-transparent border-2 rounded-lg border-gray-600 focus:border-white flex flex-col justify-center items-center p-5 cursor-pointer"
      >
        <input {...getInputProps()} id="cover" name="fileupload" />
        {value ? (
        value instanceof File ? ( 
          <img
            src={URL.createObjectURL(value)} 
            alt="Preview"
            className="w-full object-contain rounded-lg"
          />
        ) : (
          <img
          src={value}
          alt="Preview"
          className="w-full object-contain rounded-lg"
        />
        )
        ) : (
          <div className="w-1/2 flex flex-col justify-center items-center">
            <img src="./icon.png" alt="Upload Icon" width={"130px"} />
            <h2 className="text-center">
              Drag and Drop or click here to upload image
            </h2>
          </div>
        )}
      </div>
    
    );
  }
  
  export default FileUpload;
  