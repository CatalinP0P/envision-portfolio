import React, { useEffect } from "react";
import profileBlank from "../assets/profileBlank.webp";
import backgorund1 from "../assets/background/background1.jpeg";
import Container from "../components/ui/Container";
import { ReactComponent as LogoSVG } from "../assets/logos/Envision2.svg";
import Reveal from "../components/animation/Reveal";
import SlideFromBottom from "../components/animation/SlideFromBottom";
import useContentful from "../hooks/useContentful";
import { useForceUpdate } from "framer-motion";

export default function Hero() {
  const { loading, portfolioDetails } = useContentful();

  return loading ? (
    <></>
  ) : (
    <div className="w-full relative min-h-screen">
      <div className="absolute left-0 top-0 w-full h-full z-[0] bg-primary/90" />
      <img
        className="absolute left-0 top-0 object-cover w-full h-full z-[-1]"
        src={backgorund1}
      />

      <Container className="max-w-[1000px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:items-center">
        <div className="w-full mx-auto md:mx-0 flex flex-col items-start text-start gap-4 z-[1]">
          <a target="_blank" href="https://code-envision.ro">
            <Reveal color="white">
              <LogoSVG className="w-full -mb-4" />
            </Reveal>
          </a>
          <div className="h-[2px] w-24 bg-white" />
          <div className="flex flex-col">
            <Reveal color="white">
              <label className="text-5xl font-semibold text-white">
                {portfolioDetails
                  ? `${portfolioDetails.nume} ${portfolioDetails.prenume}`
                  : ""}
              </label>
            </Reveal>
            <Reveal color="white">
              <label className="text-2xl font-light text-neutral-200">
                {portfolioDetails?.pozitie}
              </label>
            </Reveal>
          </div>
        </div>
        <SlideFromBottom className="w-full flex flex-row justify-end float-right">
          <img
            className="w-[350px] h-[350px] min-w-[350px] rounded-full bg-neutral-100 object-cover"
            src={portfolioDetails?.image.fields.file.url || profileBlank}
          />
        </SlideFromBottom>
      </Container>
    </div>
  );
}
