import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Z</h1>
        <Link to="/">Home</Link>
        <Link to="/post">Posts</Link>

    </header>
  )
}

export default Header