// src/pages/AlbumPage.js
import React from 'react';
import styles from './AlbumStyle.module.css';

const sections = [
  {
    title: 'Nature',
    images: [
      '/assets/nature1.jpg',
      '/assets/nature2.jpg',
      '/assets/nature3.jpg',
      '/assets/nature4.jpg',
    ],
  },
  {
    title: 'Cities',
    images: [
      '/assets/city1.jpg',
      '/assets/city2.jpg',
      '/assets/city3.jpg',
      '/assets/city4.jpg',
    ],
  },
  {
    title: 'Animals',
    images: [
      '/assets/animal1.jpg',
      '/assets/animal2.jpg',
      '/assets/animal3.jpg',
      '/assets/animal4.jpg',
    ],
  },
];

const Album = () => {
  return (
    <div className={styles.albumContainer}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <div className={styles.imageContainer}>
            {section.images.map((image, i) => (
              <img key={i} src={image} alt={`Section ${section.title} Image ${i}`} className={styles.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;