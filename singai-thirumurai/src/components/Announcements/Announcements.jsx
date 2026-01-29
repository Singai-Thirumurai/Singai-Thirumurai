import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'; 
import './Announcements.css';
import placeholderImg from '../../assets/gallery-1.jpg';
import NewsTicker from '../NewsTicker/NewsTicker';

const Announcements = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = filter === 'all' 
    ? data 
    : data.filter(item => item.type === filter);

  return (
    <div className='announcements-section'>

      <NewsTicker />

      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Updates</button>
        <button className={filter === 'event' ? 'active' : ''} onClick={() => setFilter('event')}>Upcoming Events</button>
        <button className={filter === 'announcement' ? 'active' : ''} onClick={() => setFilter('announcement')}>Announcements</button>
        <button className={filter === 'competition' ? 'active' : ''} onClick={() => setFilter('competition')}>Competitions</button>
      </div>

      <div className="news-grid">
        {filteredData.map((item) => {

          const dateObj = item.date && item.date.toDate ? item.date.toDate() : new Date(item.date);
          
          return (
            <div className="news-card" key={item.id}>
              <div className="card-image">
                <img src={item.imageURL || placeholderImg} alt={item.title} />
                <div className="date-badge">
                  {/* Extract Day */}
                  <span>{dateObj ? dateObj.getDate() : '--'}</span>
                  {/* Extract Month Name */}
                  <span>{dateObj ? dateObj.toLocaleString('default', { month: 'short' }) : '--'}</span>
                </div>
              </div>

              <div className="card-content">
                <span className={`tag ${item.type}`}>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small style={{display:'block', marginTop:'10px', color:'#888'}}>
                  🕒 {dateObj ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                </small>
                {item.location && <small>📍 {item.location}</small>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;