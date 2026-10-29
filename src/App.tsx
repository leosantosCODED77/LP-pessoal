import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experiences } from './components/Experiences';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Experiences />
        <AboutMe />
        <Projects />
      </main>

      <Footer />
    </>
  );
};

export default App;
