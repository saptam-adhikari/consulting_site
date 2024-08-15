import React, { useEffect, useRef } from 'react';
import './VisualInfo.css';
const VisualInfo = () => {
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
        <div className='visual-info'>
            <h5>Build Visually</h5>
            <h1 ref={h1Ref}>
                {Array.from("Elementor Page Builder ").map((letter, index) => (
                    <span key={index} className="animated-letter">{letter === ' ' ? '\u00A0' : letter}</span>
                ))}
                <br />
                {Array.from("+100 Elements & Blocks.").map((letter, index) => (
                    <span key={index + 20} className="animated-letter">{letter === ' ' ? '\u00A0' : letter}</span>
                ))}
            </h1>
            <p>We used #1 free WordPress website builder (Drag & Drop) – Elementor as page builder. <br/> This page builder is Simple. Powerful. Flexible. Experience the power of 100% visual <br/>design and build websites that load faster, and speed up the process of building them.</p>
            <h3>✔ Drag and Drop Editor</h3>
            <h3>✔ No Coding Required</h3>
            <h3>✔ Header & Footer Builder</h3>
            <h3>✔ Widgets for Every Purpose</h3>
        </div>
    );
};

export default VisualInfo;