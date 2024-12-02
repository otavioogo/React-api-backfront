import {  Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {

  const [search , setSearch ] = useState("")

  

  return (
    <div className='App'> 
    <nav id="navbar">
     <h2>
       <Link to='/'><BiCameraMovie /> Movies Lib </Link>
     </h2>
       <form>
        <input type="text" placeholder="Procure um filmes" onChange={(e) => setSearch(e.target.value)} 
        value={search}/>
        <button type="submit">
            <BiSearchAlt2 />
        </button>
       </form>
    </nav>
    </div>
  )
}

export default Navbar
