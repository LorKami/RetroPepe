import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from "react-scroll";

import '../Monitor/Monitor.css'
import '../Monitor/Menu.css'
import '../Monitor/About.css'
import '../Monitor/Tokenomics.css'

import Logo1 from '../../images/logo1.png'
import TokenomicsImage from '../../images/tokenomics.png'
import Example from '../../images/NFT/example.png'

import image1 from '../../images/m1.png';
import image2 from '../../images/m2.jpeg';
// import image3 from '../../images/m3.png';
import image4 from '../../images/m4.png';
import image5 from '../../images/m5.png';
import image6 from '../../images/m6.png';
import image7 from '../../images/m7.jpeg';
import image8 from '../../images/m8.jpeg';
import image9 from '../../images/m9.jpeg';
import image10 from '../../images/m10.png';
import image11 from '../../images/m11.png';
import image12 from '../../images/m12.png';
import image13 from '../../images/m13.png';
// import image14 from '../../images/m14.png';

function handleNavClick(section) {
  animateScroll.scrollTo(section);
}

const Monitor = () => {

  const [activeSection, setActiveSection] = useState(null);

const handleSetActive = (to) => {
  setActiveSection(to);
};

const images = [
  image1, image2, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13
];
  return (
    <div>

      <div className='MenuSection'>
        <div className='MenuBtn'>
          <Link to="Home" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>Home</p></Link>
          <Link to="About" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>About</p></Link>
          <Link to="Tokenomics" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>Tokenomics</p></Link>
          <a href='https://twitter.com/Retropepe_' target='_blank' ><p className='BtnMenu'>Twitter</p></a>
        </div>
      </div>
      
<section id='Home'>
  <div className='HomeSection'>
    <div className='HomeLogo'>
      <img src={Logo1} />
    </div>
  </div>
</section>

<section id="About">
  <div className='AboutSec'>
    <div className='AboutBox'>
    <div className='AboutImage'>
    <img src={Example} />
    </div>
    <div className='AboutAbout'>
    <h2>RetroPepe</h2>

    {/* <p>Your mommy</p> */}

        <div className="gallery">
      {images.map((image, index) => (
        <img key={index} className="gallery-image" src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>

    </div>
    </div>
  </div>
</section>

<section id="Tokenomics">
  <div className='TokenomicsSec'>
    <div className='TokenomicBox'>
    <img src={TokenomicsImage} />
    </div>
  </div>
</section>

    </div>
  )
}

export default Monitor