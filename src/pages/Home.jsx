import React from 'react';
import AboutComponent from '../components/AboutComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServicesComponent from '../components/ServicesComponent';
import StepsComponent from '../components/StepsComponent';

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <AboutComponent />
        <StepsComponent />
        <ServicesComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default HomePage;
