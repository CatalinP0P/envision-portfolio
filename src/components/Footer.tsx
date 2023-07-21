import React from "react";
import Container from "./ui/Container";
import { ReactComponent as FacebookSVG } from "../assets/logos/facebook.svg";
import { ReactComponent as InstagramSVG } from "../assets/logos/instagram.svg";
import background2 from "../assets/background/background2.jpg";
import useContentful from "../hooks/useContentful";

export default function Footer() {
  const { loading, portfolioDetails } = useContentful();

  return (
    <div className="relative py-4">
      <img
        className="absolute left-0 top-0 w-full h-full z-[-1] object-cover"
        src={background2}
      />
      <div className="absolute left-0 top-0 w-full h-full bg-primary/90 z-[-1]" />
      <Container className="flex flex-row justify-between text-white">
        <label>© All right reserved {new Date().getFullYear()}</label>
        <div className="flex flex-row gap-4">
          {portfolioDetails?.facebookLink && (
            <a
              target="_blank"
              href={portfolioDetails?.facebookLink}
              className="hover:fill-neutral-200 fill-neutral-50"
            >
              <FacebookSVG height={24} width={24} />
            </a>
          )}
          {portfolioDetails?.instagramLink && (
            <a
              target="_blank"
              href={portfolioDetails?.instagramLink}
              className="hover:fill-neutral-200 fill-neutral-50"
            >
              <InstagramSVG height={24} width={24} />
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}
