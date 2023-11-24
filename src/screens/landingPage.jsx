import React from 'react'
import "tailwindcss/lib/css/preflight.css"
import NavBar from '../components/landing-page-components/navbar'
import ProductCard from '../components/ProductCard'
import Hero from '../components/landing-page-components/hero'
import Footer from '../components/footerMain'
import Intro from '../components/landing-page-components/intro'
import Features from '../components/landing-page-components/features'
export default function landingPage() {
  return (
    <>
    <NavBar> </NavBar>
    <Hero></Hero>
    <Intro></Intro>
    <Features></Features>
    <Footer></Footer>

    </>
  )
}
