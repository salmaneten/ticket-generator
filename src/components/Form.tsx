import { useState } from "react";
import upload from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";
import DragAndDrop from "./DragAndDrop";
const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    gitHubUsername: "",
  });
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ ...form, avatar });
    // Submit logic here
  };

  const handleRemoveFile = () => {
    setAvatar(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full items-center justify-center max-w-xl mx-auto pt-10 relative z-50"
    >
      <DragAndDrop
        label="Upload avatar"
        innerLabel="Drag and drop or click to upload"
        icon={upload}
        onFileChange={handleFileChange}
        file={avatar}
        infoIcon={infoIcon}
        infoText="Upload your photo (JPG or PNG max size:"
        maxSize={500}
        onRemoveFile={handleRemoveFile}
      />
      <label className="w-full max-w-md mt-3">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">Full Name</span>
      </label>
      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        className="w-full p-3 max-w-md bg-neutral-700 bg-opacity-40 rounded-xl items-center justify-center border border-neutral-300 text-neutral-0 hover:bg-opacity-80 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40"
      />
      <label className="w-full max-w-md mt-3">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">Email Address</span>
      </label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="example@email.com"
        className="w-full p-3 max-w-md bg-neutral-700 bg-opacity-40 font-inconsolata rounded-xl items-center justify-center border border-neutral-300 text-neutral-0 hover:bg-opacity-80 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40"
      />
      <label className="w-full max-w-md mt-3">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">GitHub Username</span>
      </label>
      <input
        name="gitHubUsername"
        value={form.gitHubUsername}
        onChange={handleChange}
        placeholder="@yourusername"
        className="w-full p-3 max-w-md bg-neutral-700 bg-opacity-40 font-inconsolata rounded-xl items-center justify-center border border-neutral-300 text-neutral-0 hover:bg-opacity-80 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)]"
      />
      <button
        type="submit"
        className="w-full max-w-md p-3 mt-3 rounded-xl bg-orange-500 font-inconsolata text-neutral-900 font-bold hover:bg-orange-700 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
