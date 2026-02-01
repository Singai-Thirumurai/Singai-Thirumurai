import React from 'react'
import './AboutUs.css'
import about_us_img from '../../assets/tmoc.jpg';

const AboutUs = () => {
    return (
        <div className='aboutUs' name='aboutUs'>
            <div className='aboutUs-left'>
                <img src={about_us_img} className="aboutUs-img" />
                {/* <img src={play_icon} className="play-icon" /> */}
            </div>
            <div className='aboutUs-right'>
                <h3>Who are we?</h3>
                <p>
                    <p>Singapore Thirumurai Manadu, is a non-profit organisation that propagates the wisdom of Thirumurai.</p>
                    <h3> Our Vision</h3>
                    <p>To make Thirumurai a way of life for the welfare of humanity.</p>
                    <h3>Our Mission</h3>
                    <p>To nurture the growth of Saivism and Tamil in Singapore via Conferences, Camps and Competitions.</p>
                    <h3>Message</h3>
                    <p>"Do not be foolish and say you will get this if you do that,
                        You are not disadvantaged in any ways if you do not seek evil
                        Since we do our best to glorify God's feet,
                        No harm would fell on me, Lord Thiruneelakandam
                        (the compassionate lord who swallowed posion, and turned his throat blue)".</p>
                    <p>Thiru Gnanasambandhar, 2nd Thirumurai
                    </p>
                </p>
            </div>
        </div>
    )
}

export default AboutUs
