import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Events from "./components/Events/Events"
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Resources from "./components/Resources/Resources";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Annoucements from "./components/Announcements/Announcements";
import AboutUs from "./components/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Gallery from "./components/Gallery/Gallery";
import CampSection from "./components/CampSection/CampSection";

const App = () => {

  const showCampSection = true; // Set to true to show the CampSection, false to hide it

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <div id="announcements">
          <Title subTitle='Announcements' title='Scheduled Events' />
          <Annoucements />
        </div>

        {showCampSection && <CampSection />}

        <div id="about">
          <Title subTitle='About Us' title='Singapore Thirumurai Manadu Organising Committee' />
          <AboutUs />
        </div>

        <div id="about_thirumurai">
          <Title title='Thirumurai Overview' />
          <About />
        </div>

        <div id="events">
          <Title subTitle='Flagship Events' title='Join Us! Click on the cards below to learn more!' />
          <Events />
        </div>

        <div id="resources">
          <Title subTitle='Resources' title='Check out the resources!' />
          <Resources />
        </div>

        <div id="gallery">
          <Title subTitle='Gallery' title='Event Photos' />
          <Gallery />
        </div>

        <div id="contact">
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
        </div>

        <ScrollToTop />
        <Footer />
      </div>
    </div>
  )
}

export default App;