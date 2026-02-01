import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import './Resources.css';
import { FaFilePdf, FaMusic, FaExternalLinkAlt, FaYoutube, FaLink } from 'react-icons/fa';

// --- NEW SUB-COMPONENT ---
const ResourceCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const textLimit = 120; // Number of characters to show before truncating

  // Function to decide which icon to show
  const getIcon = (category) => {
    // Normalize category to lowercase for consistent checking
    const cat = category?.toLowerCase() || '';
    if (cat.includes('pdf')) return <FaFilePdf className="res-icon pdf" />;
    if (cat.includes('audio')) return <FaMusic className="res-icon audio" />;
    if (cat.includes('youtube link')) return <FaYoutube className="res-icon youtube" />;
    return <FaLink className="res-icon link" />; // Default icon
  };

  // Determine if text is long enough to need a "Read More" button
  const isLongText = item.description.length > textLimit;
  
  // Decide what text to display
  const displayText = expanded 
    ? item.description 
    : (isLongText ? item.description.slice(0, textLimit) + "..." : item.description);

  return (
    <div className={`resource-card ${expanded ? 'expanded' : ''}`}>
      <div className="card-top">
        {getIcon(item.category)}
        <span className="res-category">{item.category?.toUpperCase() || 'LINK'}</span>
      </div>
      
      <h3>{item.title}</h3>
      
      <div className="card-desc-container">
        <p>{displayText}</p>
        {isLongText && (
          <button 
            className="read-more-btn" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="download-btn">
        Access Resource <FaExternalLinkAlt style={{marginLeft: '8px', fontSize:'0.8rem'}}/>
      </a>
    </div>
  );
};
// -------------------------

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resources"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };
    fetchResources();
  }, []);

  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(item => item.category?.toLowerCase() === filter.toLowerCase());

  return (
    <div className='resources-section'>
      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Resources</button>
        <button className={filter === 'pdf' ? 'active' : ''} onClick={() => setFilter('pdf')}>PDF Guides</button>
        <button className={filter === 'audio' ? 'active' : ''} onClick={() => setFilter('audio')}>Audio Tracks</button>
        <button className={filter === 'youtube link' ? 'active' : ''} onClick={() => setFilter('youtube link')}>YouTube Links</button>
        <button className={filter === 'link' ? 'active' : ''} onClick={() => setFilter('link')}>External Links</button>
      </div>

      <div className="resources-grid">
        {filteredResources.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Resources;