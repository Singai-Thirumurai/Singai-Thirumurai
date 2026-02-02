import React from 'react'
import './About.css'
import about_img from '../../assets/natarajar.jpg'
// import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about' name='about'>
            <div className='about-right'>
                <img src={about_img} className="about-img" />
                {/* <img src={play_icon} className="play-icon" /> */}
            </div>
            <div className='about-left'>
                <h3>ABOUT THIRUMURAI</h3>
                <p>
                    <p>“Thirumurai” in Tamil means holy division. It is a compendium of songs or hymns praising of Lord Shiva that were compiled between the 6th and 11th centuries by various poets-saints in South India.
                        Panniru Thirumurai, consisting of 12 volumes, is a collection of songs, hymns, scriptures and literary texts by twenty-seven renowned poets-saints. These are highly regarded literary works in Hindu mythology.
                        King Raja Raja Chola-I (985-1013 CE), a staunch devotee of Lord Shiva, undertook a mission to recover these hymns after hearing a few renderings of these hymns in his court. He sought the help of Nambi Andar Nambi, who was a priest in a temple. It is believed that with God's intervention Nambi found the presence of these hymns, in the form of palm leaves, half-eaten by white ants in a chamber inside the second precinct in Thillai Natarajar Temple at Chidambaram.</p>
                        
                        <p>Though the local Dikshithars from Chidambaram opposed this mission, the King intervened and helped Nambi procure these scripts and complete his task of compiling and arranging them. It is also believed that a significant portion of these scripts was lost or destroyed by the lack of preservation in the Chidambaram temple.
                        Nambi Andar Nambi arranged the works of three famous poet-saints - Thirugnanasampandhar, Thirunavukkarasar (Appar), and Sundaramurthy Nayanar in the first seven volumes. These seven volumes came to be known as “Devaram”. Of these seven volumes, the works by Thirugnanasambanthar constitute the first three volumes and are known as “Thirukkadaikappu”.  Similarly, the works by Thirunavukkarasar constituting the next three volumes came to be known as Appar's Devaram.  Sundaramurthy Nayanar's works constitute a single volume and are called “Thiruppattu”.</p>
                    {/* <p>The Thirumurai is a collection of twelve volumes containing poems and hymns written in praise of the Hindu god Shiva. It's a major work in Tamil literature, dating back from the 6th to the 11th centuries CE.</p>
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
                    </p> */}
                </p>
            </div>
        </div>
    )
}

export default About
