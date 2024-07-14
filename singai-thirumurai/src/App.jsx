import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Events from "./components/Events/Events"
import Title from "./components/Title/Title";
import About from "./components/About/About";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='About Thirumurai' title='SINGAPORE THIRUMURAI MAANDU, is a non-profit organisation that propagates the wisdom of Thirumurai.'/>
        <About/>
        <Title subTitle='Flagship Events' title='Join Us'/>
        <Events/>
      </div>
    </div>
  )
}

export default App;