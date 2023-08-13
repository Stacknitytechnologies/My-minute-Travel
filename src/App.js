import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Flights from './Components/Pages/Flights';
import Trains from './Components/Pages/Trains';
import Hotels from './Components/Pages/Hotels';
import Buses from './Components/Pages/Buses';
import Herosection from './Components/Herosection';


function App() {
  return (

    
    <Router>
    
    <div>
      <Header/>
      
      <Routes>
          <Route path='/Home' exact element={<Home />} />
          <Route path='/Flights' exact element={<Flights />} />
          <Route path='/Trains' exact element={<Trains />} />
          <Route path='/Hotels' exact element={<Hotels />} />
          <Route path='/Buses' exact element={<Buses />} />

          
        </Routes>
        
      <Footer/>
    </div>
    </Router>
  );
}

export default App;


