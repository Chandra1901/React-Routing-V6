import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {

  return (
    <>
       <div>
            <input
                type='search'
                placeholder='Search Products'
            /> 
        </div>
        <nav>
            <Link to='featured'>Featured</Link>
              &nbsp;&nbsp;
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products