import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import './NewsTicker.css';
import { FaBullhorn } from 'react-icons/fa'; // Import a loud icon

const NewsTicker = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        // Fetch only headlines that are marked as 'isActive'
        const q = query(collection(db, "headlines"), where("isActive", "==", true));
        const querySnapshot = await getDocs(q);
        const newsData = querySnapshot.docs.map(doc => doc.data());
        setHeadlines(newsData);
      } catch (error) {
        console.error("Error fetching headlines:", error);
      }
    };

    fetchHeadlines();
  }, []);

  // If no active headlines, don't show the bar at all
  if (headlines.length === 0) return null;

  return (
    <div className="ticker-container">
      <div className="ticker-label">
        <FaBullhorn /> LATEST NEWS
      </div>
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {headlines.map((item, index) => (
            <span key={index} className="ticker-item">
              {item.text}
              {/* Add a separator if it's not the last item */}
              {index < headlines.length - 1 && <span className="separator"> • </span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;