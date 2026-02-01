import React from 'react';
import './CampSection.css';

const CampSection = () => {
    return (
        <div className="camp-container">
            <div className="camp-content">
                <div className="camp-text">
                    <span className="camp-badge">ANNUAL HIGHLIGHT</span>
                    <h2>Thirumurai Camp 2026</h2>
                    <p>
                        Join us for an immersive spiritual journey. Our annual camp brings together
                        youth aged 11 to 15 years to learn more about Saivam, Thirumurai and how they impact our lives.
                        Activities include singing sessions, guest speakers, games, poojai sessions and group bonding activities.
                        <a><strong>Watch some of the Highlights from our previous camps in the video beside!</strong></a>
                    </p>
                    <ul>
                        <li>📅 <strong>Date:</strong> Last week of May / first week of June 2026 (TBC)</li>
                        <li>📍 <strong>Location:</strong> TBC</li>
                        <li>👥 <strong>Open to:</strong> Ages 11 - 15</li>
                    </ul>
                    <button className="camp-btn">Sign up link will be out soon!</button>
                </div>

                <div className="camp-video">
                    <div className="camp-video">
                        <div className="camp-video">
                            <iframe
                                /* Added &loop=1 and &playlist=KhWd6-eUc20 */
                                src="https://www.youtube.com/embed/KhWd6-eUc20?si=Jo9icYVY-EVWGeTq&autoplay=1&mute=1&loop=1&playlist=KhWd6-eUc20"
                                title="Thirumurai Camp Highlights"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>        </div>
            </div>
        </div>
    );
};

export default CampSection;