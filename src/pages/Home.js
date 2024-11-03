import React from 'react'
import FinanceTrackerHeader from '../components/FinanceTrackerHeader'
import Navbar from '../components/Navbar';
import Tracker from '../components/Tracker';

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <FinanceTrackerHeader></FinanceTrackerHeader>
   <Tracker></Tracker>
  
    </>
  )
}

export default Home