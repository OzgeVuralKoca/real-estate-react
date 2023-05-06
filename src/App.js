import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/real-estate-react' element={<Home />} />
        <Route path='/real-estate-react/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
