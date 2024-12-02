
import {  Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/navbar';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <Outlet />
   </div>
  );
}

export default App
