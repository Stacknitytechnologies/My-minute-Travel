import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flights from "./pages/Flights";
import Trains from "./pages/Trains";
import Hotels from "./pages/Hotels";
import Buses from "./pages/Buses";

function App() {
  return (
    <Router>
      <div>
        <Header className="z-50" />

        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Flights" exact element={<Flights />} />
          <Route path="/Trains" exact element={<Trains />} />
          <Route path="/Hotels" exact element={<Hotels />} />
          <Route path="/Buses" exact element={<Buses />} />
          <Route path="/" exact element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
