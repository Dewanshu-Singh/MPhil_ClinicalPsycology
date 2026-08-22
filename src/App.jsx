import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import RCIAdvantage from './components/RCIAdvantage'
import WhyChoose from './components/WhyChoose'
import AdmissionPath from './components/AdmissionPath'
import Curriculum from './components/Curriculum'
import CareerOpportunities from './components/CareerOpportunities'
import OurCampus from './components/OurCampus'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <RCIAdvantage />
      <WhyChoose />
      <AdmissionPath />
      <Curriculum />
      <CareerOpportunities />
      <OurCampus />
      <FAQs />
      <Footer />
    </>
  )
}

export default App
