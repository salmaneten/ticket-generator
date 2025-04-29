import { useMemo, useState } from "react";
import upload from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";
import DragAndDrop from "./DragAndDrop";
import FormField from "./FormField";
import { useNavigate } from "react-router-dom";
import {
  ERROR_MESSAGES,
  FORM_LABELS,
  PLACEHOLDERS,
} from "../constants/messages";
import { FILE_SIZES, fromKBtoBytes } from "../constants/config";
import { validateEmail } from "../utils/validation";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    gitHubUsername: "",
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const navigate = useNavigate();
  const isEmailValid = useMemo(() => validateEmail(form.email), [form.email]);
  const isSizeFileExceeded = useMemo(() => avatar && avatar.size > fromKBtoBytes(FILE_SIZES.AVATAR_MAX_KB), [avatar])

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const showEmailErrorMessage =
    !isEmailValid && form.email.length > 0 && !isTypingEmail;

  const handleEmailChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, email: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > fromKBtoBytes(FILE_SIZES.AVATAR_MAX_KB)) {
        setAvatar(null);
      } else {
        setAvatar(e.target.files[0]);
      }
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ ...form, avatar });
    if (form.fullName && form.email && form.gitHubUsername) {
      if (isEmailValid) {
        navigate("/ticket", {
          state: {
            fullName: form.fullName,
            email: form.email,
            gitHubUsername: form.gitHubUsername,
            avatar: avatar,
          },
        });
      }
    }
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
        label={FORM_LABELS.UPLOAD_AVATAR}
        innerLabel={FORM_LABELS.DRAG_DROP}
        icon={upload}
        onFileChange={handleFileChange}
        file={avatar}
        infoIcon={infoIcon}
        infoText={FORM_LABELS.UPLOAD_INFO}
        maxSize={FILE_SIZES.AVATAR_MAX_KB}
        onRemoveFile={handleRemoveFile}
        isSizeFileExceeded={isSizeFileExceeded ?? false}
      />
      <FormField
        label={FORM_LABELS.FULL_NAME}
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      <FormField
        label={FORM_LABELS.EMAIL}
        name="email"
        value={form.email}
        onChange={handleEmailChange}
        onFocus={() => setIsTypingEmail(true)}
        onBlur={() => setIsTypingEmail(false)}
        placeholder={PLACEHOLDERS.EMAIL}
        error={showEmailErrorMessage}
        errorMessage={ERROR_MESSAGES.EMAIL}
      />
      <FormField
        label={FORM_LABELS.GITHUB_USERNAME}
        name="gitHubUsername"
        value={form.gitHubUsername}
        onChange={handleChange}
        placeholder={PLACEHOLDERS.GITHUB}
      />
      <button
        type="submit"
        className="w-full max-w-md p-3 mt-3 rounded-xl bg-orange-500 font-inconsolata text-neutral-900 font-bold hover:bg-orange-700 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40"
      >
        {FORM_LABELS.SUBMIT}
      </button>
    </form>
  );
};

export default Form;
