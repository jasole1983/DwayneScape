import React from 'react'
import { NavLink } from 'react-router-dom';
import BackgroundSlider from 'react-background-slider'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'

import './LandingPage.css'

export default function LandingPage({props}){

  return (
    <>
      <BackgroundSlider images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]} duration={10} transition={2} />
      <div className='intro'>
        <h1>Conquer The Ultimate Mountain</h1>
        <h3>Flashcards for serious Dwayne "The Rock" Johnson fans</h3>
        <button className='search-btn'>
          <NavLink to='/categories' exact={true} activeClassName='active'>
            Find Decks
          </NavLink>
        </button>
      </div>
    </>
  )
}
