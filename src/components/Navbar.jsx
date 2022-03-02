import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  const [search, setSearch] = useState(true)

  return (
    <div className='navbar flex'>
      <h1 className="title">Cron<span className='orange'>i</span>n Contr<span className='orange'>o</span>ls</h1>
      <div className="pages flex disabled">
        <li>Home</li>
        <li>Product</li>
        <li>Solutions</li>
        <li>About</li>
        <li>Support</li>
      </div>
      <div className="right">
        <FaSearch className='search' />
        <input type={`search ${search && 'disabled' }`}/>
        <button className='contact'>Contact</button>
      </div>
    </div>``
  )
}

export default Navbar