import React, { useEffect, useRef } from 'react';
import "./TemplateHead.css";

const TemplatesHead = () => {
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
                    });
                }
            });
        }, { threshold: 0.5 });

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
        <div className='templates-head'>
            <h5>Ready-Made Templates</h5>
            <h1 ref={h1Ref}>
                {Array.from("Beautiful Designs, Endless Possibilities").map((letter, index) => (
                    <span key={index} className="animated-letter">{letter === ' ' ? '\u00A0' : letter}</span>
                ))}
            </h1>
            <h3>
                Beautiful, hand-crafted designs to get you started. Install any demo or template with a single click. Mix and match anything.
            </h3>
        </div>
    );
}

export default TemplatesHead;
