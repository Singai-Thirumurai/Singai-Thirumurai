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

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Annoucements' title='Scheduled Events'/>
        <Annoucements/>
        <Title subTitle='About Us' title='Singapore Thirumurai Manadu Organising Committee'/>
        <AboutUs/>
        <Title title='Thirumurai Overview'/>
        <About/>
        <Title subTitle='Flagship Events' title='Join Us'/>
        <Events/>
        <Title subTitle='Resources' title=''/>
        <Resources/>
        <Title subTitle='Gallery' title='Event Photos'/>
        <Gallery />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <ScrollToTop/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;