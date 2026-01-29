import React, { useState, useEffect, useRef } from 'react';
import { searchData } from './SearchData';
import './SearchModal.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1); // Tracks the highlighted item
    const inputRef = useRef(null);
    const resultsRef = useRef(null); // Ref to scroll the list if needed

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            if (!isOpen) {
                setQuery('');
                setResults([]);
                setActiveIndex(-1);
            }
        };
    }, [isOpen, onClose])

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        setActiveIndex(-1); // Reset selection when typing new query

        if (value.length > 0) {
            const filtered = searchData.filter(item =>
                item.title.toLowerCase().includes(value) ||
                item.keywords.toLowerCase().includes(value)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    // NEW: Handle Keyboard Navigation
    const handleKeyDown = (e) => {
        if (results.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault(); // Stops cursor from moving in input
            setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && results[activeIndex]) {
                handleResultClick(results[activeIndex]);
            }
        }
    };

    const handleResultClick = (item) => {
        onClose();
        if (item.path) {
            window.location.href = item.path;
        } else if (item.sectionId) {
            scrollToSection(item.sectionId);
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="search-overlay" onClick={onClose}>
            <div className="search-container" onClick={(e) => e.stopPropagation()}>
                <div className="search-header">
                    <FaSearch className="search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for events, resources..."
                        value={query}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown} // Listen for keys here
                    />
                    <FaTimes className="close-icon" onClick={onClose} />
                </div>

                <div className="search-results" ref={resultsRef}>
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <div
                                key={index}
                                // Add 'active' class if this index matches activeIndex
                                className={`search-item ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleResultClick(item)}
                                onMouseEnter={() => setActiveIndex(index)} // Optional: Highlight on mouse hover too
                            >
                                <h4>{item.title}</h4>
                                <p>Jump to section</p>
                            </div>
                        ))
                    ) : (
                        query.length > 0 && <p className="no-results">No matches found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;