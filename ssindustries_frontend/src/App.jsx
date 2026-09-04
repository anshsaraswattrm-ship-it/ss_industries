import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage'; // Naya import yahan add kiya
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        
        {/* Dynamic Category Route */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        
        {/* Yahan hum future me About, Contact, etc. ke routes add karenge */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;