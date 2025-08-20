
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
