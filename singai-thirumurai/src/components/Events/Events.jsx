import React from 'react'
import './Events.css'
import event_1 from '../../assets/program-1.png'
import event_2 from '../../assets/program-2.png'
import event_3 from '../../assets/program-3.png'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Events = () => {
  return (
    <div className='events'>
        <div className='event'>
            <img src={event_1} alt=""/>
            <div className="caption">
                <img src={program_icon_1} alt=""/>
                <p>Thirumurai Manadu</p>
            </div>
        </div>
        <div className='event'>
            <img src={event_2} alt=""/>
            <div className="caption">
                <img src={program_icon_2} alt=""/>
                <p>Thirumurai Competitions</p>
            </div>
        </div>
        <div className='event'>
            <img src={event_3} alt=""/>
            <div className="caption">
                <img src={program_icon_3} alt=""/>
                <p>Thirumurai Classes</p>
            </div>
        </div>
    </div>
  )
}

export default Events
