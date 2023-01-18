import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import One from '../components/One'
import Three from '../components/Three'
import Two from '../components/Two'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Slider/>
        <One/>
        <Two/>
        <Three/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Home