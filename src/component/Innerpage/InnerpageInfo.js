import React, { useEffect, useRef } from 'react';
import './InnerpageInfo.css';

const InnerpageInfo = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const spans = entry.target.querySelectorAll('.animated-letter');
                
                if (entry.isIntersecting) {
                    spans.forEach((span, index) => {
                        span.style.animationDelay = `${index * 0.05}s`;
                        span.classList.add('fadeIn');
                    });
                } else {
                    spans.forEach(span => {
                        span.classList.remove('fadeIn');
                        span.style.animationDelay = '0s';
                    });
                }
            });
        }, { threshold: 0.1 }); 

        if (h1Ref.current) {
            observer.observe(h1Ref.current);
        }

        return () => {
            if (h1Ref.current) {
                observer.unobserve(h1Ref.current);
            }
        };
    }, []);

    return (
        <div className='innerpage-info'>
            <h3>amazing inner pages</h3>
            <h1 ref={h1Ref}>
                {Array.from("Inner Pages Exactly For Your Purposes").map((letter, index) => (
                    <span key={index} className="animated-letter">{letter === ' ' ? '\u00A0' : letter}</span>
                ))}
            </h1>
            <p>You can easily create your own complete website. The inner pages have been optimally designed and <br/> arranged so that you can quickly and easily adjust your website to your needs.</p>
        </div>
    );
};

export default InnerpageInfo;
