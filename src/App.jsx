import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsfeed from './components/Newsfeed';
import Banner from './components/Banner';
import Articles from './components/Articles';
import Readers from './components/Readers';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Newsfeed />
      <Banner />
      <Articles />
      <Readers />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;