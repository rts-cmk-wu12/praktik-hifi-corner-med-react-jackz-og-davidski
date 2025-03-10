import React, { useState } from "react";
import "../style/gallery.scss";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Gallery() {
    const [current, setCurrent] = useState(0);
    const slides = [
        { src: "/homecinema.jpg", alt: "Our Home cinema" },
        { src: "/amplifiers.jpg", alt: "Our popular amplifiers" },
        { src: "/headphones.jpg", alt: "Top rated headphones" },
        { src: "/speaker.jpg", alt: "Our higest quality speakers" },
    ];

    const captionText = slides[current].alt;

    const skiftSlide = (direction) => {
        setCurrent((prev) => {
            // Use a ternary operator for next and previous slide logic
            return direction === "next"
                ? (prev + 1) % slides.length
                : (prev - 1 + slides.length) % slides.length;
        });
    };

    return (
        <div className="gallery-grid">
            <div className="slider-grid">
                <div className="slider">
                    <p className="caption">{captionText}</p>
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            className={`slide ${index === current ? "slide--active" : ""}`}
                            src={slide.src}
                            alt={slide.alt}
                        />
                    ))}
                </div>
                <div id="back" onClick={() => skiftSlide("prev")}>
                <GrFormPrevious  className="fas fa-chevron-left" aria-hidden="true"/>
                </div>
                <div id="next" onClick={() => skiftSlide("next")}>
                <MdNavigateNext className="fas fa-chevron-right" aria-hidden="true" />
                    
                </div>
            </div>
        </div>
    );
}
