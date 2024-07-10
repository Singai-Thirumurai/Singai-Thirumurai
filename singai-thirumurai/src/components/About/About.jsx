import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} className="about-img" />
                <img src={play_icon} className="play-icon" />
            </div>
            <div className='about-right'>
                <h3>ABOUT THIRUMURAI</h3>
                <p>
                    <p>The Thirumurai is a collection of twelve volumes containing poems and hymns written in praise of the Hindu god Shiva. It's a major work in Tamil literature, dating back from the 6th to the 11th centuries CE.</p>
                    <h3>Meaning</h3>
                    <p>The word "Thirumurai" itself translates to "holy order" in Tamil.</p>
                    <h3>Content</h3>
                    <p>The Thirumurai primarily consists of devotional songs by various poet-saints from South India.</p>
                    <h3>Compilation</h3>
                    <p>The twelve volumes were compiled around the 12th century by Nambiyandar Nambi.
                        The first seven volumes are the works of three famous poet-saints: Thirugnanasambanthar, Thirunavukkarasar (Appar), and Sundarar.
                        These seven volumes are known collectively as "Devaram," meaning "garland of honey" symbolizing the sweetness of the language used.</p>
                    <p>The Thirumurai is considered a highly important religious text for Shaivism, a denomination within Hinduism that reveres Shiva.
                        It's also valued for its literary merit and offers a glimpse into the Bhakti movement,
                        a period of intense Hindu devotion around the 6th to 9th centuries.
                    </p>
                </p>
            </div>
        </div>
    )
}

export default About
