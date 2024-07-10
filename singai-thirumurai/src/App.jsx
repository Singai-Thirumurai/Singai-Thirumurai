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
        <Title subTitle='SINGAPORE THIRUMURAI MAANDU, is a non-profit organisation that propagates the wisdom of Thirumurai.' title='Thirumurai Programs'/>
        <Events/>
        <About/>
      </div>
    </div>
  )
}

export default App;