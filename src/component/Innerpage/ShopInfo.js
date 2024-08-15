import React, { useEffect, useRef } from 'react';
import './ShopInfo.css';

const ShopInfo = () => {
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
        <div className='shop-info'>
            <h5>WooCommerce Ready</h5>
            <h1 ref={h1Ref}>
                {Array.from("Start your Shop today!").map((letter, index) => (
                    <span key={index} className="animated-letter">{letter === ' ' ? '\u00A0' : letter}</span>
                ))}
            </h1>
            <p>WooCommerce – the most customizable eCommerce platform for building your online business. We used this plugin for ecommerce and included demo. After installing demo data you will get demo shop there.</p>
            <h3>✔ Create your own Online Store on your Business Consulting site</h3>
            <h3>✔ Set Prices for each Add-On</h3>
            <h3>✔ Stable & Secure Payments by WooCommerce</h3>
            <button>Explore Shop Page</button>
        </div>
    );
};

export default ShopInfo;
