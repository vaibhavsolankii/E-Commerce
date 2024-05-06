import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Carousel";
import Mens from "./components/Mens";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mens" element={<Mens />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
