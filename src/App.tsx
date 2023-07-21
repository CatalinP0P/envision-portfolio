import React from "react";
import Layout from "./layout";
import Contact from "./home/Contact";
import Hackaton from "./home/Hackaton";
import Hero from "./home/Hero";
import About from "./home/About";
import Reveal from "./components/animation/Reveal";

function App() {
  return (
    <Layout>
      <Hero />
      <div className="bg-neutral-100">
        <About />
      </div>
      <Hackaton />
      <div className="bg-neutral-100">
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
