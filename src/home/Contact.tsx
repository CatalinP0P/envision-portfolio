import React from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ContactForm from "./ContactForm";
import Reveal from "../components/animation/Reveal";
import SlideFromBottom from "../components/animation/SlideFromBottom";
import useContentful from "../hooks/useContentful";

export default function Contact() {
  const { loading } = useContentful();
  return loading ? (
    <></>
  ) : (
    <Container className="py-24 flex flex-col gap-16">
      <SectionTitle
        title="Contact Personal"
        subtitle="In caz de probleme, detalii"
      />
      <SlideFromBottom>
        <ContactForm className="p-4 md:p-8" />
      </SlideFromBottom>
    </Container>
  );
}
