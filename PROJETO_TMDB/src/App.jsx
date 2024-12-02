
import {  Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/navbar';

function App() {
  return (
    <div className='App'>
    <Navbar />
   <h2>My First React App</h2>
   <Outlet />
   </div>
  );
}

export default App
