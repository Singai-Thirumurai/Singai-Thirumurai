import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'; 
import './Announcements.css';
import placeholderImg from '../../assets/gallery-1.jpg';
import NewsTicker from '../NewsTicker/NewsTicker';

const Announcements = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  const [visibleCount, setVisibleCount] = useState(4); // Number of items to show initially

  const getCategoryName = (key) => {
    if (key === 'event') return 'Upcoming Events';
    if (key === 'announcement') return 'Announcements';
    if (key === 'competition') return 'Competitions';
    return 'Updates'; // Default for 'all'
  };

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

  const sortedData = [...filteredData].sort((a, b) => {
    if (!a.date || !b.date) return 0; // Handle missing dates

    const dateA = a.date.toDate ? a.date.toDate() : new Date(a.date);
    const dateB = b.date.toDate ? b.date.toDate() : new Date(b.date);

    return dateA - dateB; // Sort in ascending order (soonest first)
  });

  const displayedData = sortedData.slice(0, visibleCount); // Show only the number of items based on visibleCount

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleCount(4); // Reset visible count when filter changes
  };

  return (
    <div className='announcements-section'>

      <NewsTicker />

      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Updates</button>
        <button className={filter === 'event' ? 'active' : ''} onClick={() => handleFilterChange('event')}>Upcoming Events</button>
        <button className={filter === 'announcement' ? 'active' : ''} onClick={() => handleFilterChange('announcement')}>Announcements</button>
        <button className={filter === 'competition' ? 'active' : ''} onClick={() => handleFilterChange('competition')}>Competitions</button>
      </div>

      <div className="news-grid">
        
        {displayedData.length === 0 ? ( 
          <div className='empty-state'><p>There are no new {getCategoryName(filter)} at the moment.</p></div> ) : 
          (displayedData.map((item) => {

          const dateObj = item.date && item.date.toDate ? item.date.toDate() : new Date(item.date);
          
          return (
            <div className="news-card" key={item.id}>
              <div className="card-image">
                <img src={item.photo || placeholderImg} alt={item.title} />
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
        }))}
      </div>

      {visibleCount < sortedData.length && (
        <div className="load-more-container">
          <button 
            className="load-more-btn" 
            onClick={() => setVisibleCount(prev => prev + 4)}
          >
            Load More {getCategoryName(filter)}
          </button>
        </div>
      )}

    </div>
  );
};

export default Announcements;