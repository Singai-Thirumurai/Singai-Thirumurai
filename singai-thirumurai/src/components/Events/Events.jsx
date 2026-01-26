import React, { useState } from 'react'
import './Events.css'
import Modal from '../Modal/Modal'
import event_1 from '../../assets/manadu.jpg'
import event_2 from '../../assets/competition.jpg'
import event_3 from '../../assets/thevaaram_class_placeholder.jpg'
import event_4 from '../../assets/placeholder-img.jpg'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_icon_4 from '../../assets/program-icon-4.png'
import program_icon_5 from '../../assets/program-icon-5.png'

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
        { name: "Sri Velmurugal Gnanamuneeswaran Temple", zone: "North/East" },
        { name: "Mrs Savithri Karthikeyan c/o Sri Muneeswarar Temple", zone: "West" }
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
                <img src={event_4} alt="" />
                <div className="caption" onClick={() => setModalType('payirchi-kazhagam')}>
                    <img src={program_icon_2} alt="" />
                    <p>Thirumurai Payirchi Kazhagam</p>
                </div>
            </div>

            <div className='event'>
                <img src={event_4} alt="" />
                <div className="caption" onClick={() => setModalType('merch')}>
                    <img src={program_icon_4} alt="" />
                    <p>Thirumurai Merchandise</p>
                </div>
            </div>

            <div className='event'>
                <img src={event_4} alt="" />
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
                <p>This is a yearly event...</p>
            </Modal>


            <Modal
                isOpen={modalType === 'competitions'}
                onClose={() => setModalType(null)}
                title="Thirumurai Competitions"
            >
                <p>This is a yearly event where students participate in singing competitons...</p>
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
                <p>This is a yearly event where students participate in singing and theory tests...</p>
            </Modal>

            <Modal
                isOpen={modalType === 'merch'}
                onClose={() => setModalType(null)}
                title="Thirumurai Merchandise"
            >
                <p>This is a where you can find our merch! Keep a look out at this space for something fun in the future!</p>
            </Modal>

            
            <Modal
                isOpen={modalType === 'thirumurai-youth-wing'}
                onClose={() => setModalType(null)}
                title="Thirumurai Youth Wing"
            >
                <p>Thirumurai Youth Wing is a group of young people who are passionate about the Thirumurai tradition and want to contribute to the community...</p>
            </Modal>
        </div>
    )
}

export default Events
