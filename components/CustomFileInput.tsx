import React, { useRef, useState } from "react";

interface CustomFileInputProps {
  onChange: (files: File[]) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileListArray = Array.from(files);

      setFileList((prevFiles) => [...prevFiles, ...fileListArray]);
      onChange(fileListArray);
    }
  };

  const handleFileRemove = (index: number) => {
    const updatedFileList = [...fileList];
    updatedFileList.splice(index, 1);
    setFileList(updatedFileList);

    const fileListArray = Array.from(updatedFileList);
    onChange(fileListArray);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="bg-custom-white rounded">
      <div className="border-2 border-gray-200 border-dashed lg:text-base text-sm">
        <div
          className="cursor-pointer text-center h-32 flex flex-col items-center justify-center text-custom-gray"
          onClick={handleClick}
        >
          Drag & drop files here or{" "}
          <span className="text-custom-red font-medium">browse</span>
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
        <>
          <div className="px-8 py-6">
            <p className="font-bold">Uploaded Files:</p>
            <ul>
              {fileList.map((file, index) => (
                <li key={index}>
                  {file.name}{" "}
                  <button
                    onClick={() => handleFileRemove(index)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="mt-1 text-sm text-gray-600">
              ({fileList.length}/{fileList.length} files)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomFileInput;
