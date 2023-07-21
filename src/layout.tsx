import React from "react";
import Footer from "./components/Footer";
import useContentful from "./hooks/useContentful";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { loading } = useContentful();
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 grow flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}
