import React from 'react'
import BannerImage from "../assets/1beef.jpg"

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}>

            </div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Hamburger veya sadece Burger, iki dilim yuvarlak sandviç ekmeği arasına yerleştirilen bir köfte, Amerikan peyniri, marul yapılan sandviç türü. Genellikle ketçap, mayonez, turşu, soğan, domates, hardal ve bunun gibi değişik malzemelerin de ilavesi ile servis edilir.</p>
            </div>
        </div>
    )
}

export default About