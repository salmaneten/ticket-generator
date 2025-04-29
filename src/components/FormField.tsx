import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: boolean;
  errorMessage?: string;
}

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  error,
  errorMessage
}: FormFieldProps) => {
  return (
    <>
      <label className="w-full max-w-md mt-3">
        <span className="text-neutral-0 text-md text-left w-full font-inconsolata opacity-80 tracking-wide">
          {label}
        </span>
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full p-3 max-w-md bg-neutral-700 bg-opacity-40 font-inconsolata rounded-xl items-center justify-center border text-neutral-0 hover:bg-opacity-80 focus:outline-none focus:border-2 focus:border-neutral-300 focus:shadow-[0_0_0_3px_#14052e,0_0_0_5px_rgba(212,212,212,0.4)] focus:border-opacity-40 ${
          error ? "border-orange-500" : "border-neutral-300"
        }`}
      />
      {error && errorMessage && (
        <span className="w-full max-w-md text-orange-500 text-sm text-left w-full font-inconsolata opacity-80 tracking-wide">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default FormField; 