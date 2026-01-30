import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import './Resources.css';
import { FaFilePdf, FaMusic, FaDownload, FaExternalLinkAlt, FaLink } from 'react-icons/fa';

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
    : resources.filter(item => item.category === filter);

  // Helper to pick the right icon
  const getIcon = (category) => {
    if (category === 'pdf') return <FaFilePdf className="res-icon pdf" />;
    if (category === 'audio') return <FaMusic className="res-icon audio" />;
    if (category === 'link') return <FaLink className="res-icon link" />;
    return <FaExternalLinkAlt className="res-icon" />;
  };

  return (
    <div className='resources-section'>
      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Resources</button>
        <button className={filter === 'pdf' ? 'active' : ''} onClick={() => setFilter('pdf')}>PDF Guides</button>
        <button className={filter === 'audio' ? 'active' : ''} onClick={() => setFilter('audio')}>Audio Tracks</button>
        <button className={filter === 'link' ? 'active' : ''} onClick={() => setFilter('link')}>External Links</button>
      </div>

      <div className="resources-grid">
        {filteredResources.map((item) => (
          <div className="resource-card" key={item.id}>
            <div className="card-top">
              {getIcon(item.category)}
              <span className="res-category">{item.category.toUpperCase()}</span>
            </div>
            
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="download-btn">
              Access Resource <FaExternalLinkAlt style={{marginLeft: '8px', fontSize:'0.8rem'}}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;