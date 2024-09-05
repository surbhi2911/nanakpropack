import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Contactus from './Components/ContactUsPage/Contactus';
import Portfolio from './Components/PortfolioPage/Portfolio';
import Product from './Components/ProductPage/Product';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/PortFolio' element={<Portfolio />} />
          {/* <Route path='/Profile' element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
