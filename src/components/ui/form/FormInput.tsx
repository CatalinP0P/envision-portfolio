import React, { InputHTMLAttributes } from "react";

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export default function FormInput({ title, ...props }: FormProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {title && (
        <label className="uppercase text-sm font-bold text-gray-800">
          {title}
        </label>
      )}
      <input {...props} className="p-2 rounded-md border-2 border-black/5" />
    </div>
  );
}
