import React from "react";
import Reveal from "../animation/Reveal";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className }: Props) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          {subtitle}
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light">{title}</label>
      </Reveal>
    </div>
  );
}
