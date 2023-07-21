import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import FormInput from "../components/ui/form/FormInput";
import emailjs from "@emailjs/browser";
import FormTextArea from "../components/ui/form/FormTextArea";
import { setMaxIdleHTTPParsers } from "http";
import useContentful from "../hooks/useContentful";

interface formDataProps {
  email: string;
  details: string;
  name: string;
}

export default function ContactForm({ className }: { className?: string }) {
  const formRef: any = useRef(null);
  const [formData, setFormData] = useState<formDataProps>({
    email: "",
    details: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<any>
  ) => {
    e.preventDefault();

    setSending(true);
    try {
      const res = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      );
    } catch (err) {}

    setSending(false);

    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { loading, portfolioDetails } = useContentful();

  return loading ? (
    <></>
  ) : (
    <form
      ref={formRef}
      className={"w-full bg-white rounded-3xl flex flex-col gap-4 " + className}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-8 text-xl lg:text-2xl text-gray-800 font-medium">
        <label>Hi, {portfolioDetails.prenume}!</label>
        <div className="flex flex-row gap-8 items-baseline flex-wrap w-full">
          <label>My Name is </label>
          <ContactInput
            name="name"
            onChange={handleChange}
            placeholder="YOUR NAME"
            required={true}
            type="name"
          />
        </div>
        <label>I'd like to discuss about</label>
        <div className="border-b-2">
          <textarea
            name="details"
            onChange={handleChange}
            className="p-2 min-h-[8rem] outline-none text-lg lg:text-xl bg-transparent w-full"
            placeholder="YOUR IDEA / MESSAGE"
            required={true}
          ></textarea>
        </div>
        <div className="flex flex-row gap-8 items-baseline flex-wrap w-full">
          <label>Contact me back at </label>
          <ContactInput
            name="email"
            onChange={handleChange}
            placeholder="YOUR EMAIL"
            type="email"
            required={true}
          />
        </div>
      </div>
      {error && (
        <label className="text-red-600 font-semibold tex-sm">{error}</label>
      )}
      <button
        className={
          "px-8 py-2 uppercase bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all w-full " +
          (sending ? " opacity-75 pointer-events-none cursor-wait" : "")
        }
      >
        {sending ? "Loading..." : "Send"}
      </button>
    </form>
  );
}

const ContactInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="border-b-2">
      <input
        className="py-2 px-2 text-lg lg:text-xl bg-transparent outline-none"
        {...props}
      />
    </div>
  );
};
