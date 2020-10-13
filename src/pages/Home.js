import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navigation from '../components/Navigation/Navigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navigation toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/> {/**Get Date Object to use for template */}
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home
