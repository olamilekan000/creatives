import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SecondSection from './Secondsection';
import ServicesNPortfolio from './Services';
import Team from './Team';
import SocialBtn from './ConnectBtn';
import ContactUs from './Contact';
import Footer from './Footer';

const Web = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = e => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div>
      <Navbar />
      <SecondSection />
      <ServicesNPortfolio scrollPosition={scrollPosition} />
      <Team scrollPosition={scrollPosition} />
      <SocialBtn />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Web;
