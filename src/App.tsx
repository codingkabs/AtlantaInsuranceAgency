import Header from './components/Header';
import Hero from './components/Hero';
import BusinessSpecialties from './components/BusinessSpecialties';
import OurAgents from './components/OurAgents';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BusinessSpecialties />
      <OurAgents />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
