import './App.css';
import Banner from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Offer from './components/Offers.js';
import HolidayEssentials from './components/HolidayEssentials.js';
import HotelsBrand from './components/HotelsBrand.js'
import Banner2 from './components/Banner2.js';
import SumerSpecials from './components/SumerSpecials.js'




function App() {
  return (
    <>
      <Banner />
      <Offer />
      <HolidayEssentials />
      <HotelsBrand />
      <Banner2 />
      <SumerSpecials/>
    </>

  );
}

export default App;
