import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FormProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
}

export default function FormTextArea({ title, ...props }: FormProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {title && (
        <label className="font-bold text-gray-800 uppercase text-sm">
          {title}
        </label>
      )}
      <textarea
        {...props}
        className="p-2 rounded-md border-2 border-black/5 min-h-[10rem]"
      ></textarea>
    </div>
  );
}
