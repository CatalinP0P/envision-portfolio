import React from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container className="py-24 flex flex-col gap-16" >
      <SectionTitle
        className="text-center items-center mx-auto"
        title="Contact Personal"
        subtitle="In caz de probleme, curiozitati"
      />
      <ContactForm className="p-4 md:p-8" />
    </Container>
  );
}
