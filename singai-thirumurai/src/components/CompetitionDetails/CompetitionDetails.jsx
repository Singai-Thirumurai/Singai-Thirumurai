import React from 'react';
import './CompetitionDetails.css';
import { FaFilePdf, FaMusic, FaCloudDownloadAlt, FaPlayCircle } from 'react-icons/fa';

const CompetitionDetails = () => {
  
  // 1. Organize your data here for easy editing
  const audioTracks = [
    {
      category: "Nursery to K2 (R1-R3)",
      tracks: [
        { name: "Track 01", link: "https://drive.google.com/file/d/1joCnXLA4L6xuSM6cC_TOZqZGsjCMpVpW/view?usp=drive_link" },
        { name: "Track 02", link: "https://drive.google.com/file/d/18Zw-6W1ivZFAlT7XLBFAHbOOIkhKZbZM/view?usp=drive_link" },
        { name: "Track 03", link: "https://drive.google.com/file/d/1ULJ0A5DztGqOm7bSXP3582hNfODDLN6B/view?usp=drive_link" }
      ]
    },
    {
      category: "Primary 1 to 3 (R4-R6)",
      tracks: [
        { name: "Track 04", link: "https://drive.google.com/file/d/1myzFXYr3XlBYlFhi6WCqI2cW0NaeujxU/view?usp=drive_link" },
        { name: "Track 05", link: "https://drive.google.com/file/d/1KUhodrlaI40ttzN6bPwaYbQ2gE6K5GV2/view?usp=drive_link" },
        { name: "Track 06", link: "https://drive.google.com/file/d/1Augf7geSO0ryW-ZNkKJWXkjzeZzZMJbu/view?usp=drive_link" },
        { name: "Track 07", link: "https://drive.google.com/file/d/1W-C-o5i4CiEQ2TKHnVN0CVx3ZVkHF4ey/view?usp=drive_link" }
      ]
    },
    {
      category: "Primary 4 to 6 (R7-R9)",
      tracks: [
        { name: "Track 08", link: "https://drive.google.com/file/d/1GkSeeRYKAG6nAwUpJNiPGfSsipe7iabk/view?usp=drive_link" },
        { name: "Track 09", link: "https://drive.google.com/file/d/1vDrAq65o5-eMFBhZ9O5euEbWZLBmOcYk/view?usp=drive_link" },
        { name: "Track 10", link: "https://drive.google.com/file/d/1CAt0jfGgGtZ6PCpnASrv1ZR0Ke4y4CeQ/view?usp=drive_link" },
        { name: "Track 11", link: "https://drive.google.com/file/d/1Yy_sQ3amzDF2_K51LzRGFX0BqAIlAvCx/view?usp=drive_link" },
        { name: "Track 12", link: "https://drive.google.com/file/d/1SJtxBOtJilQLyo3F_UT3fJw0LW8Yg8A2/view?usp=drive_link" }
      ]
    },
    {
      category: "Secondary 1 to 4 (R10-R11)",
      tracks: [
        { name: "Track 13", link: "https://drive.google.com/file/d/1J7hVGeRfh4aMjGNmCD_ACMsH8HXi0uSy/view?usp=drive_link" },
        { name: "Track 14", link: "https://drive.google.com/file/d/1XvJ-_ZW5DkPcfmDSSTXZLisrzQKSX7m4/view?usp=drive_link" },
        { name: "Track 15", link: "https://drive.google.com/file/d/1KY4pAq0x3Gpc6Ad9ahCfc7qq4NqliqSM/view?usp=drive_link" },
        { name: "Track 16", link: "https://drive.google.com/file/d/1UnB_nz_x8M3j250Gtpb-ukd4vf_hCC6E/view?usp=drive_link" }
      ]
    },
    {
      category: "Pathigam",
      tracks: [
        { name: "Track 17", link: "https://drive.google.com/file/d/1trwPioRbnFUNcPMJlzL3OKMAOiVqhdQ3/view?usp=drive_link" }
      ]
    }
  ];

  return (
    <div className="comp-container">
      
      {/* SECTION 1: The Main PDF Download */}
      <div className="pdf-section">
        <h3><FaFilePdf /> Competition Materials</h3>
        <p>Download the song booklet for the 2026 Competitions.</p>
        
        <a href="https://drive.google.com/file/d/1dyeC4oDxI_9Ggo_18_5HK5MmDCPU65xK/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="main-download-btn">
          <FaCloudDownloadAlt /> Download Song Booklet (PDF)
        </a>
      </div>

      <hr className="divider" />

      {/* SECTION 2: Audio Tracks */}
      <div className="audio-section">
        <h3><FaMusic /> Practice Audio Tracks</h3>
        <p>Select your category to listen to the reference tracks.</p>

        <div className="category-grid">
          {audioTracks.map((group, index) => (
            <div key={index} className="category-card">
              <h4 className="category-title">{group.category}</h4>
              <div className="track-list">
                {group.tracks.map((track, i) => (
                  <a key={i} href={track.link} target="_blank" rel="noopener noreferrer" className="track-btn">
                    <FaPlayCircle className="play-icon"/> {track.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CompetitionDetails;