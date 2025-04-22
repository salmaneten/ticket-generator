import React from "react";

interface DragAndDropProps {
  label: string;
  innerLabel: string;
  icon: string;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  infoIcon: string;
  infoText: string;
  maxSize: number;

}

const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
  return (
    <>
      <label className="w-full max-w-md">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">
          {props.label}
        </span>
      </label>
      <label className="w-full max-w-md rounded-xl custom-dashed-border">
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
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={props.onFileChange}
        className="hidden"
      />
      <div className="text-neutral-300 max-w-md text-left w-full flex gap-2">
        <img src={props.infoIcon} alt="info" />
        <span className="font-inconsolata text-sm opacity-80 tracking-wide">{props.infoText} {props.maxSize}KB).</span>
      </div>
    </>
  );
};

export default DragAndDrop;
