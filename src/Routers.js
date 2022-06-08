import React from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import { Views } from './pages/Views';
import { Booking } from './pages/Booking';
import { Trips } from './pages/Trips';

import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";

export const Routers = () => {
  return (
    <div className='container mx-auto px-4'>
        <Nav/>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/views" element={<Views />} />
        <Route path="/trip" element={<Booking />} />
        <Route path="/booking" element={<Trips />} />
        </Routes>
    </div>
  )
}
