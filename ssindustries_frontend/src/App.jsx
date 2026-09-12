import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
        
        
        {/* Yahan hum future me About, Contact, etc. ke routes add karenge */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;