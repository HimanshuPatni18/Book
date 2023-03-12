import React from 'react'
import Sidebar from '../../FixedComponents/Sidebar';
import Nav from '../../FixedComponents/Nav';
import SellList from '../../Component/SellList/SellList'


const MySell = () => {
  return (
    <div className='dashboard'>
        {/* <Nav /> */}
        
        <div className='belownav'>
            <Sidebar />
            <SellList/>
      
        </div>
    </div>
  )
}

export default MySell