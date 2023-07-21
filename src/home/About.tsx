import React from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import aboutImage from "../assets/undraw_coding.svg";
import Reveal from "../components/animation/Reveal";
import SlideFromBottom from "../components/animation/SlideFromBottom";
import useContentful from "../hooks/useContentful";

export default function About() {
  const { loading, portfolioDetails } = useContentful();

  return loading ? (
    <></>
  ) : (
    <Container className="py-24 flex flex-col gap-16">
      {/* <SectionTitle
        title="Despre mine"
        subtitle="ocupatie, experienta, cariera"
        className="mx-auto items-center"
      /> */}
      <div className={"flex flex-col gap-2 text-center items-center"}>
        <Reveal>
          <label className="font-bold uppercase text-md text-primary">
            Ocupatie, Experienta, Cariera
          </label>
        </Reveal>

        <Reveal>
          <label className="text-4xl lg:text-6xl font-light">Despre Mine</label>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <SlideFromBottom>
          <div className="relative w-full h-[0] pb-[60%] bg-white rounded-2xl">
            <img
              className="absolute left-0 top-0 w-full h-full object-contain"
              src={aboutImage}
            />
          </div>
        </SlideFromBottom>

        <div className="flex flex-col gap-12 py-1 h-full">
          <Reveal>
            <h3 className="text-3xl font-semibold text-neutral-800">
              {portfolioDetails.aboutTitle}
            </h3>
          </Reveal>
          <SlideFromBottom>
            <p className="text-xl font-medium text-neutral-600">
              {portfolioDetails.aboutDescription}
            </p>
          </SlideFromBottom>
        </div>
      </div>
    </Container>
  );
}
