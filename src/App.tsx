import React from "react";
import Layout from "./layout";
import Contact from "./home/Contact";
import Hero from "./home/Hero";
import About from "./home/About";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <div className="bg-neutral-100">
        <Contact/>
      </div>
    </Layout>
  );
}

export default App;
