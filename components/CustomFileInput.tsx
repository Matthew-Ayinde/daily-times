import React, { useRef, useState } from "react";

interface CustomFileInputProps {
  onChange: (files: FileList) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  //   const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileListArray = Array.from(files);

      setFileList((prevFiles) => [...prevFiles, ...fileListArray]);
      onChange(files);

      // Update upload progress
      //   const totalFiles = fileList.length + fileListArray.length; // Use fileList.length directly
      //   const uploadedFiles = fileList.length;
      //   setUploadProgress((uploadedFiles / totalFiles) * 100);
    }
  };

  const handleFileRemove = (index: number) => {
    const updatedFileList = [...fileList];
    updatedFileList.splice(index, 1);
    setFileList(updatedFileList);

    const fileListObject = new DataTransfer();
    updatedFileList.forEach((file) => {
      fileListObject.items.add(file);
    });

    const newFileList = fileListObject.files;
    onChange(newFileList);

    // Update upload progress
    // const totalFiles = updatedFileList.length;
    // const uploadedFiles = updatedFileList.length;
    // setUploadProgress((uploadedFiles / totalFiles) * 100);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="bg-gray-100 rounded-md">
      <div className="border-2 border-gray-300 border-dashed">
        <div
          className="cursor-pointer text-center h-44 flex flex-col items-center justify-center"
          onClick={handleClick}
        >
          Drag & drop files here or <span className="text-red-500">browse</span>
        </div>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
        />
      </div>

      {fileList.length > 0 && (
        <div className="px-8 py-6">
          <p className="font-bold">Uploaded Files:</p>
          <ul>
            {fileList.map((file, index) => (
              <li key={index}>
                {file.name}{" "}
                {/* <button
                  onClick={() => handleFileRemove(index)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* progress bar */}
      <div className="mt-4">
        {/* <div className="h-3 relative bg-gray-200 rounded-md overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-yellow-400"
            style={{ width: `${uploadProgress}%` }}
          />
          <div
            className="absolute top-0 left-0 h-full bg-blue-400"
            style={{ width: `${100 - uploadProgress}%` }}
          />
        </div> */}

        {/* <p>{uploadProgress}%</p> */}
        <p className="mt-1 text-sm text-gray-600">
          ({fileList.length}/{fileList.length} files)
        </p>
      </div>
    </div>
  );
};

export default CustomFileInput;
