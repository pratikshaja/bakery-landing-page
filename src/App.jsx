import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import SpecialOffers from './components/SpecialOffers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-amber-50">
            <Header />
            <Hero />
            <BestSellers />
            <WhyChooseUs />
            <About />
            <MenuPreview />
            <Testimonials />
            <Gallery />
            <SpecialOffers />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
