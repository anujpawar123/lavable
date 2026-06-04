import React from 'react';
import HeroBackground from '../components/HeroBackground';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroBackground />
      <main className="home-container">
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
