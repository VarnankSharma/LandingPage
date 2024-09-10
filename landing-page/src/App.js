import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PatientForm from './components/PatientForm';
import About from './components/About';
import Features  from './components/Features';
function App() {
  const formRef = useRef(null);

  const handleGetStarted = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to form section
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero handleGetStarted={handleGetStarted} />
     
      <div ref={formRef}> {/* Attach the ref to the form section */}
        <Features/>
        <PatientForm />
      </div>
     
      <About/> <Footer />
    </div>
  );
}

export default App;
