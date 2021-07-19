import React from 'react'
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



export default function LandingPage({props}){
  
  // const image1=<img src="https://wallpapercave.com/w/wp3102661" alt="rock pic"/>
  // const image2=<img src="https://wallpapercave.com/w/wp3102645" alt="rock pic"/>
  // const image3=<img src="https://wallpapercave.com/w/wp2001162" alt="rock pic"/>
  // const image4=<img src="https://wallpapercave.com/w/wp3102679" alt="rock pic"/>
  // const image5=<img src="https://wallpapercave.com/w/wp2774293" alt="rock pic"/>
  // const image6=<img src="https://wallpapercave.com/w/wp3102706" alt="rock pic"/>
  // const image7=<img src="https://images3.alphacoders.com/886/886536.jpg" alt="rock pic"/>
  
  return (
    <>
      <BackgroundSlider images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]} duration={10} transition={2} />
    </>
  )
}

