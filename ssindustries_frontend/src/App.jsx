import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import CustomFurniture from './pages/CustomFurniture';
import FAQ from './components/HomeSections/Faq';
import Careers from './pages/Careers';
import TermsOfService from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import GetAQuote from './pages/GetAQuote';
import VideoConsultation from './pages/VideoConsultation';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="custom-furniture" element={<CustomFurniture />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="careers" element={<Careers />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="get-a-quote" element={<GetAQuote />} />
        <Route path="video-call" element={<VideoConsultation />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;