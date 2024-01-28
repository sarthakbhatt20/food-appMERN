import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
 
    return (
    <>
    <div><Navbar/></div>
    <div><Carousel></Carousel></div>
    <div className='m-3'><Card></Card></div>
    <div><Footer></Footer></div>
    </>
  )
}
