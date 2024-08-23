// src/pages/AlbumPage.js
import React, { useRef, useEffect } from 'react';
import styles from './AlbumStyle.module.css';
const sections = [
  {
    title: 'Nature',
    images: [
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
    ],
  },
  {
    title: 'Cities',
    images: [
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
    ],
  },
  {
    title: 'Animals',
    images: [
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
      '/public/Hero-img.png',
    ],
  },
];

const Album = () => {
  const scrollContainerRefs = useRef([]);

  useEffect(() => {
    scrollContainerRefs.current.forEach((container) => {
      const handleWheel = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };

      if (container) {
        container.addEventListener('wheel', handleWheel);
      }

      return () => {
        if (container) {
          container.removeEventListener('wheel', handleWheel);
        }
      };
    });
  }, []);

  return (
    <div className={styles.albumContainer}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <div
            className={styles.imageContainer}
            ref={(el) => (scrollContainerRefs.current[index] = el)}
          >
            {section.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Section ${section.title} Image ${i}`}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;