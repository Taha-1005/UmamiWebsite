import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Brands from './Components/Brands/Brands';
import Loft from './Components/Loft';
import Tobo from './Components/Tobo';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/loft' element={<Loft />} />
            <Route path='/tobo' element={<Tobo />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
