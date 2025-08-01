// src/App.jsx
import MainNavbar from './components/Navbar';
import Hero from './components/Hero';
import Carrusel from './components/Carrusel';
import Servicios from './components/Servicios'; 
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <>
      <MainNavbar />
      <Hero />
      <Carrusel />
      <Servicios />
      <About />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
