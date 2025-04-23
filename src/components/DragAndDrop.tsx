import React, { useEffect, useState } from "react";

interface DragAndDropProps {
  label: string;
  innerLabel: string;
  icon: string;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  infoIcon: string;
  infoText: string;
  maxSize: number;
  onRemoveFile?: () => void; // Add this prop
}

const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (props.file) {
      const objectUrl = URL.createObjectURL(props.file);
      setPreviewImage(objectUrl);

      // Clean up the URL when component unmounts or file changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [props.file]);

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviewImage(null);
    props.onRemoveFile?.();
  };

  const handleChangeImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const input = document.getElementById("file-upload") as HTMLInputElement;
    input.click();
  };

  return (
    <>
      <label className="w-full max-w-md">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">
          {props.label}
        </span>
      </label>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={props.onFileChange}
        className="hidden"
      />

      <label
        htmlFor="file-upload"
        className="w-full max-w-md rounded-xl custom-dashed-border focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40"
      >
        {previewImage ? (
          <div className="flex flex-col space-y-4 p-4 bg-neutral-700 bg-opacity-40 rounded-xl items-center justify-center cursor-pointer hover:bg-opacity-80">
            <img
              src={previewImage}
              alt="preview"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex flex-row gap-2">
              <button
                className="bg-neutral-700 text-sm text-neutral-300 font-inconsolata rounded-md px-2 py-1 bg-opacity-40"
                onClick={handleRemoveImage}
              >
                Remove image
              </button>
              <button
                className="bg-neutral-700 text-sm text-neutral-300 font-inconsolata rounded-md px-2 py-1 bg-opacity-40"
                onClick={handleChangeImage}
              >
                Change image
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4 p-4 bg-neutral-700 bg-opacity-40 rounded-xl items-center justify-center cursor-pointer hover:bg-opacity-80">
            <img
              src={props.icon}
              alt="upload"
              className="bg-neutral-700 rounded-xl p-2"
            />
            <span className="mr-2 font-inconsolata text-neutral-300">
              {props.file ? props.file.name : props.innerLabel}
            </span>
          </div>
        )}
      </label>

      <div className="text-neutral-300 max-w-md text-left w-full flex gap-2">
        <img src={props.infoIcon} alt="info" />
        <span className="font-inconsolata text-sm opacity-80 tracking-wide">
          {props.infoText} {props.maxSize}KB).
        </span>
      </div>
    </>
  );
};

export default DragAndDrop;
