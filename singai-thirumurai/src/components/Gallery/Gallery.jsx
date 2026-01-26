import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

// Import your gallery images
import img1 from '../../assets/gallery-1.jpg';
import img2 from '../../assets/gallery-2.jpg';
import img3 from '../../assets/gallery-3.jpg';
import img4 from '../../assets/gallery-4.jpg';
import img5 from '../../assets/gallery-5.jpg';
import img6 from '../../assets/gallery-6.jpg';

const galleryData = [
    { img: img1, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" },
    { img: img2, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" },
    { img: img3, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" },
    { img: img4, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" },
    { img: img5, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" },
    { img: img6, link: "https://drive.google.com/drive/folders/17QQpAJWBfZjf-db5oK2JVcgf5BSNU6MN?usp=sharing", title: "Thirumurai Manadu 2025", year: "2025" }
    // Add more items as needed
];

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {galleryData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="gallery-card">
                                <img src={item.img} alt={item.title} />
                                <div className="gallery-overlay">
                                    <div className="overlay-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.year}</p>
                                        <span>View Photos</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;