import React from 'react'
import "./Landing.css";
import Illustration from '../../assets/writer-illustration.png'
import FeatureCard from "../../components/FeatureCard"
import AboutCard from "../../AboutCard/AboutCard"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const features = [
  {
    title: "Chapter Management",
    description: "Write and organize your novel chapter by chapter."
  },
  {
    title: "Auto Save",
    description: "Your writing is automatically saved while you type."
  },
  {
    title: "Word Counter",
    description: "Track the number of words in your chapters."
  },
  {
    title: "Export to PDF",
    description: "Download your novel or poem as a PDF anytime."
  },
  {
    title: "Dark Mode Toggle",
    description: "If you don't want your eyes hurt from constant writing"
  }
];


const Landing = () => {
  return (
    <div className='landing-container'>
      <Navbar/>
      <div className="landing">
      <section id='home' className='hero'>
        <div className='hero-txt'>
          <h1>Carve Your Dreams<br /> Into Novels</h1>
          <p>MeWrites help you to organize your Novels, Poems and Quotes<br /> In an organized and distraction free mode</p>
        </div>
        <div className='hero-img'>
          <img src={Illustration} alt="" />
          <div className='hero-btn'>
            <button className='get-started'>Get Started</button>
            <button className='more-info'>More Info</button>
          </div>
        </div>
      </section>

      <section id='features' className='features'>
        <h2>Features</h2>
        <div className="features-container">
          {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
        </div>
      </section>

      <h2 className='aboutTitle'>About</h2>
      <section className="about" id='about'>
        <AboutCard/>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Landing
