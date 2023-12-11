import React from 'react'
import Nav from '../navbar'
import Index from '../home page'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const user = null;
  return (
    <>
    <Nav/>
    <div>
    {
      user ? <Index/> : null
    }
    
    <Outlet/>    </div>
    </>
  )
}

export default Layout