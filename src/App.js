import React, { useState } from 'react';
import "./App.css"
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <Nav />
      <main>
        <About />
        <Project />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;