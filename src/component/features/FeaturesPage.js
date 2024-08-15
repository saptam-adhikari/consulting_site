import React, { useEffect, useState } from 'react';
import './FeaturesPage.css'; 

const FeaturesPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const featuresElement = document.querySelector('.features-info');
            const rect = featuresElement.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='featurs-page'>
            <div className={`features-info ${isVisible ? 'visible' : 'hidden'}`}>
                <h5>Level-up Your Website</h5>
                <h1>
                    {Array.from('Top-Notch Features Included').map((letter, index) => (
                        <span
                            key={index}
                            className={`animated-letter ${isVisible ? 'fadeIn' : ''}`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
                <h3>Functionality and Opportunities Brought by This Theme Make Your Website Building Process Fun and Simple.</h3>
            </div>
            <hr />
        </div>
    );
}

export default FeaturesPage;
