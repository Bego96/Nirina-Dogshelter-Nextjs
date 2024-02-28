import React from 'react'
import Header from './header'
import AboutUs from './aboutUs'
import Programs from './programs'
import MoreAboutDonate from './moreAboutDonate'
import Gallery from './gallery'
import './styles.css'
import Supporters from './supporters'
export default function Main() {
  return (
    <main>
        <Header/>
        <AboutUs />
        <Programs />
        <MoreAboutDonate />
        <Gallery />
        <Supporters />
    </main>
  )
}
