// App.js or your root component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import "./styles/globals.scss";
import Welcome from './pages/welcome';
import Register from './pages/register';
import Homepage from './pages/homepage';
import Cart from './pages/cart';
import OrdersList from './pages/ordersList';
import TrackOrder from './pages/trackOrder';
import OrderDetails from './pages/orderDetails';
 // Import your Home component

function App() {
  return (
   <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> Define your Home route */}
        {/* <Route path="/" element={<Welcome />} /> Define your Home route */}
        {/* <Route path="/" element={<Register />} /> Define your Home route */}
        {/* <Route path="/" element={<Homepage />} /> Define your Home route */}
         {/* <Route path="/" element={<Cart />} /> Define your Home route */}
         <Route path="/" element={<OrdersList />} /> Define your Home route
         {/* <Route path="/" element={<TrackOrder />} /> Define your Home route */}
         {/* <Route path="/" element={<OrderDetails />} /> Define your Home route */}
         


        {/* Other routes go here */}
      </Routes>
    </Router></>
  );
}

export default App;
