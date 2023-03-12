import React from 'react';
import Sidebar from '../../FixedComponents/Sidebar';
import Nav from '../../FixedComponents/Nav';
import BuyItems from '../../Component/BuyItems/BuyItems'

import "./Dashboard.css"


const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Nav />
        
        <div className='belownav'>
            <Sidebar />
            <BuyItems/>
      
        </div>
    </div>
    
  )
}

export default Dashboard;