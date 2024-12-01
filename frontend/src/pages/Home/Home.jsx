import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import ContactUs from '../../components/ContactUs/ContactUs';

import Testimonials from '../../components/Testonomial/Testonomial';
import BookTable from '../../components/Booktable/BookTable';
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Testimonials />
      <BookTable />
      <ContactUs/>
    </div>

  )
}

export default Home
