import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1 className='icon'>&#437;</h1>
        <div className='linksContainer'>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
    </header>
  )
}

export default Header