import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Events from "./components/Events/Events"
import Title from "./components/Title/Title";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Thirumurai Programs' title='What we Offer'/>
        <Events/>
      </div>
    </div>
  )
}

export default App;