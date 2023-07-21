import React, { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={"w-[95%] max-w-[1280px] mx-auto " + className}>
      {children}
    </div>
  );
}
