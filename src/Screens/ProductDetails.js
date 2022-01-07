import React, { useState } from 'react'
import Description from '../Components/Description'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import RelatedProduct from '../Components/RelatedProduct'
import SingleProduct from '../Components/SingleProduct'

export default function ProductDetails() {

  const [data, setdata] = useState([]);

  
  return (
    <div>
    <Nav/>
    <Header
    title = "Product Details"
    />
    <SingleProduct/>
    <Description/>
    <RelatedProduct/>
    <PreFooter/>
  </div>
  )
}
