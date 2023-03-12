import React from 'react'
import Sidebar from '../../FixedComponents/Sidebar';
// import Nav from '../../FixedComponents/Nav';
import MyCart from '../../Component/Cart/MyCart'


const MySell = () => {
  return (
    <div className='dashboard'>
        {/* <Nav /> */}
        
        <div className='belownav'>
            <Sidebar />
            <MyCart/>
      
        </div>
    </div>
  )
}

export default MySell