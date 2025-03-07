/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import './CarouselSection.css';

/*
TODO: Improve the following CarouselSection component by:
 - Adapting an already accessible carousel component (e.g. https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
 - Thinking about the animation and the user experience
 - Adding styles as you like
 - Thinking about the color contrasts
*/

export const CarouselSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(slideIndex);
      setSlideIndex((prev) => (prev + 1) % 3);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="mySlides fade"
        style={{ display: slideIndex === 0 ? 'block' : 'none' }}
      >
        <p className="image-text" translate="no">
          We have the best prices!
        </p>
        <img src="images/slide1.avif" />
      </div>

      <div
        className="mySlides fade"
        style={{ display: slideIndex === 1 ? 'block' : 'none' }}
      >
        <p className="image-text" translate="no">
          We have the best products!
        </p>
        <img src="images/slide2.avif" />
      </div>

      <div
        className="mySlides fade"
        style={{ display: slideIndex === 2 ? 'block' : 'none' }}
      >
        <p className="image-text" translate="no">
          We care about our customers!
        </p>
        <img src="images/slide3.avif" />
      </div>
    </div>
  );
};
