import React, { useState } from 'react'
import './Events.css'
import Modal from '../Modal/Modal'
import event_1 from '../../assets/manadu.jpg'
import event_2 from '../../assets/competition.jpg'
import event_3 from '../../assets/thevaaram_class_placeholder.jpg'
import event_4 from '../../assets/thirumurai_drama.jpg'
import event_5 from '../../assets/youthwing.jpg'
import event_6 from '../../assets/event_6.jpg'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_icon_4 from '../../assets/program-icon-4.png'
import program_icon_5 from '../../assets/program-icon-5.png'
import instagram_icon from '../../assets/instagram_code.png'

import CompetitionDetails from '../CompetitionDetails/CompetitionDetails'

const Events = () => {
    const [modalType, setModalType] = useState(null); // 'classes' or 'competitions' or 'manadu' or 'payirchi-kazhagam' or null

    const templeData = [
        { name: "Sri Arasakesari Sivan Temple", zone: "North/West" },
        { name: "Holy Tree Sri Punithamaram Balasubramaniar Temple", zone: "North" },
        { name: "Sri Siva Krishna Temple", zone: "North" },
        { name: "Darma Muneeswaran Temple", zone: "Central/East" },
        { name: "Sri Sivan Temple", zone: "East" },
        { name: "Sri Mariamman Temple (Chinatown)", zone: "Central" },
        { name: "Sri Senpaga Vinayagar Temple", zone: "East" },
        { name: "Sri Muneeswaran Temple (Queensway)", zone: "West" },
        { name: "Sri Ruthrakaliamman Temple", zone: "West" },
        { name: "Sri Veeramakaliamman Temple", zone: "Central" },
        { name: "Sri Vadapathira Kaliamman Temple", zone: "Central" },
        { name: "Sri Layan Sithi Vinayagar Temple", zone: "Central" },
        { name: "Sri Thendayuthapani Temple", zone: "Central" },
        { name: "Sri Maha Mariamman Temple", zone: "North" },
        { name: "Sri Velmurugan Gnanamuneeswaran Temple", zone: "North/East" },
        { name: "Mrs Savithri Karthikeyan c/o Sri Muneeswarar Temple", zone: "West" }
    ];

    const dramaData = [
        { title: "பித்தா பிறை சூடி நாடகம்", year: 2014, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "திருநீலகண்டம் நாடகம்", year: 2015, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "திலகவதியார் நாடகம்", year: 2016, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "அப்பூதி அடியார் நாடகம்", year: 2017, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "நற்றமிழ் ஞானசம்பந்தர் நாடகம்", year: 2018, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "கண்ணப்ப நாயனார் நாடகம்", year: 2019, link: "https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" },
        { title: "திருமுறை கண்ட புராணம் நாடகம்", year: 2022, link: "https://www.youtube.com/live/ZvNheZuDjdQ?si=5a4vDBOqDMs72pf0" },
        { title: "காரைக்கால் அம்மையார் நாடகம்", year: 2023, link: "https://www.youtube.com/live/RsEkuNRkkhQ?si=GM9Zd4yFyhsqzJkO" },
        { title: "மாணிக்கவாசகர் நாடகம்", year: 2024, link: "https://www.youtube.com/live/Jloe3TG2q8Y?si=PvI1crTX99dJHL3l" },
        { title: "சேரமான் பெருமாள் நாடகம்", year: 2025, link: "https://www.youtube.com/live/e6hI7Brp1BE?si=iwY9FM0EDWsWgUq7" }
    ];

    const thirumuraiPayirchiKazhagamLevels = [
        { level: 1, bookletLink: "https://drive.google.com/file/d/1hyF1Il6PVwzdSdUsTpLnLrdlnZP07auY/view?usp=sharing", songsLink: "https://drive.google.com/file/d/11C0rpC4V_68eI8ejRbTuu-8vsWlQy7Go/view?usp=sharing" },
        { level: 2, bookletLink: "https://drive.google.com/file/d/1xOIhrbeZmxOfD_ns1wXi3gcMwWE1VxWX/view?usp=sharing", songsLink: "https://drive.google.com/file/d/1_8uLyUbLaYsxa8pwtuEbYIr_xsRAz_Cp/view?usp=drive_link"},
        { level: 3, bookletLink: "https://drive.google.com/file/d/1wLU0aqMjSiS3-kOGnAgfYAK_kVt3Ww67/view?usp=drive_link", songsLink: "https://drive.google.com/file/d/1ib5aO1TOp0vKJyU09oIkPeo9xtGnh60s/view?usp=drive_link"},
        { level: 4, bookletLink: "https://drive.google.com/file/d/168OynFZkybqQZ3kzJyF0KBm97GYPNUNz/view?usp=drive_link", songsLink: "https://drive.google.com/file/d/1b6FIy760qNtpe9lpF-S1M4sDKXruszEg/view?usp=drive_link"},
        { level: 5, bookletLink: "https://drive.google.com/file/d/1L8Kq7sXdZSk9kW1Gk2i2huCfJyar8wCu/view?usp=drive_link", songsLink: "https://drive.google.com/file/d/1XPPkALLXYb22ulFJsABMT0tg-kZAZj1X/view?usp=drive_link"},
        { level: 6, bookletLink: "https://drive.google.com/file/d/1YZpwYOGPe4Xr4XI64C7j4TFjEJTDAAu5/view?usp=drive_link", songsLink: "https://drive.google.com/file/d/1_4faDknOi0OPqyRWpnS5bCyki4CtRIZt/view?usp=drive_link"}
    ];

    return (
        <div className='events' name='events'>
            <div className='event'>
                <img src={event_1} alt="" />
                <div className="caption" onClick={() => setModalType('manadu')}>
                    <img src={program_icon_1} alt="" />
                    <p>Thirumurai Manadu</p>
                </div>
            </div>
            <div className='event'>
                <img src={event_2} alt="" />
                <div className="caption" onClick={() => setModalType('competitions')}>
                    <img src={program_icon_2} alt="" />
                    <p>Thirumurai Competitions</p>
                </div>
            </div>
            <div className='event'>
                <img src={event_3} alt="" />
                <div className="caption" onClick={() => setModalType('classes')}>
                    <img src={program_icon_3} alt="" />
                    <p>Thirumurai Classes</p>
                </div>
            </div>

            <div className='event'>
                <img src={event_6} alt="" />
                <div className="caption" onClick={() => setModalType('payirchi-kazhagam')}>
                    <img src={program_icon_2} alt="" />
                    <p>Thirumurai Payirchi Kazhagam</p>
                </div>
            </div>

            <div className='event'>
                <img src={event_4} alt="" />
                <div className="caption" onClick={() => setModalType('drama')}>
                    <img src={program_icon_4} alt="" />
                    <p>Thirumurai Drama</p>
                </div>
            </div>

            <div className='event'>
                <img src={event_5} alt="" />
                <div className="caption" onClick={() => setModalType('thirumurai-youth-wing')}>
                    <img src={program_icon_5} alt="" />
                    <p>Thirumurai Youth Wing</p>
                </div>
            </div>

            <Modal
                isOpen={modalType === 'manadu'}
                onClose={() => setModalType(null)}
                title="Thirumurai Manadu"
            >
                <p>வருடம் தோறும் இந்த மாநாடு சைவ சமயக் கொள்கைகளையும் திருமுறைகளையும் பரப்புவதை நோக்கமாகக் கொண்டு சிங்கப்பூரில் நடைபெறுகிறது.</p>
            </Modal>


            <Modal
                isOpen={modalType === 'competitions'}
                onClose={() => setModalType(null)}
                title="Thirumurai Competitions 2026"
            >
                <CompetitionDetails />
            </Modal>


            <Modal
                isOpen={modalType === 'classes'}
                onClose={() => setModalType(null)}
                title="Thirumurai Classes"
            >
                <p>Thirumurai Classes happen all over Singapore and is conducted in many temples. These classes are conducted by othuvars and it is usually held on the weekends.</p>
                <table className='temple-table'>
                    <thead>
                        <tr>
                            <th>Temple Name</th>
                            <th>Zone</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templeData.sort((a, b) => a.zone.localeCompare(b.zone)).map((temple, index) => (
                            <tr key={index}>
                                <td>{temple.name}</td>
                                <td>{temple.zone}</td>
                                <td>Contact for Schedule</td> {/* Placeholder for contact info */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>

            <Modal
                isOpen={modalType === 'payirchi-kazhagam'}
                onClose={() => setModalType(null)}
                title="Thirumurai Payirchi Kazhagam"
            >
                <p>This is a yearly event where students participate in singing and theory tests.</p>
                <p>There are multiple levels to the Payirchi Kazhagam ranging from Level 1 to Level 6.</p>
                <table className='temple-table'>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Link for booklet</th>
                            <th>Link for songs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thirumuraiPayirchiKazhagamLevels.map((level, index) => (
                            <tr key={index}>
                                <td>{level.level}</td>
                                <td><a href={level.bookletLink} target="_blank" rel="noopener noreferrer">Click here for booklet Link</a></td>
                                <td><a href={level.songsLink} target="_blank" rel="noopener noreferrer">Click here for songs Link</a></td>
                            </tr>
                        ))}

                        
                    </tbody>
                </table>

            </Modal>

            <Modal
                isOpen={modalType === 'drama'}
                onClose={() => setModalType(null)}
                title="Thirumurai Drama"
            >
                <p>This is a place where you can find out more about the various nayanmaar dramas that we have hosted since 2014!</p>
                <table className='temple-table'>
                    <thead>
                        <tr>
                            <th>Drama Name</th>
                            <th>Year</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dramaData.map((drama, index) => (
                            <tr key={index}>
                                <td>{drama.title}</td>
                                <td>{drama.year}</td>
                                <td><a href={drama.link} target="_blank" rel="noopener noreferrer">Link here!</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>


            <Modal
                isOpen={modalType === 'thirumurai-youth-wing'}
                onClose={() => setModalType(null)}
                title="Thirumurai Youth Wing"
            >
                <p>We are a group of teens and young adults who are passionate about sharing the beauty of Tamil devotional music, knows as thevaram.
                    We also indulge in volunteering programs as team and hope to spread positivity and deep spirituality in youths like us.</p>
                <br />
                <p><strong>We organise Thirumurai Camps (yearly), take part in Sivarathiri, Navarathri and many other events!</strong></p>
                <br />
                <p>Join us on our journey to share the beauty of Tamil devotional music and make a positive impact in our community!
                    You may contact us via our Instagram page below or contact our email (thirumuraiyouthwing@gmail.com) for more information.</p>
                <div style={{ textAlign: 'center' }}>
                    <img className="instagram-icon" src={instagram_icon}></img>
                    <a href='https://www.instagram.com/singaithirumurai_sg?utm_source=qr&igsh=MTVzYm1wNWlkYzEzZA==' target='_blank' rel='noopener noreferrer'>Follow us on Instagram!</a>
                </div>
            </Modal>
        </div>
    )
}

export default Events
