import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css"
import image1 from '../assets/images/Recipies-Background.jpg'
import image2 from '../assets/images/Recipies-Background-2.jpg'
import image3 from '../assets/images/Recipies-Background-3.jpg'

const Home = ()=>(

    <div id="welcome-root">
        <div  className='welcome'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg"/>
            <img src={image2} className="sliderimg"/>
            <img src={image3} className="sliderimg"/>
        </AliceCarousel>
        </div>
    </div>
);

export default Home;