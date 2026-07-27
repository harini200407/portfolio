import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatCards from './components/StatCards.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx'
import Languages from './components/Languages.jsx'
import Certifications from './components/Certifications.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div data-aos="fade-up"><StatCards /></div>
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Experience /></div>
      <div data-aos="fade-up"><Skills /></div>
      <div data-aos="fade-up"><WhyWorkWithMe /></div>
      <div data-aos="fade-up"><Languages /></div>
      <div data-aos="fade-up"><Certifications /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Contact /></div>
      <Footer />
    </>
  )
}

