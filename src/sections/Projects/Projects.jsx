// src/components/Projects.js
import React from "react";
import styles from "./ProjectsStyles.module.css"; // Import the CSS module

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.projectsContainer}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card" />
            <a className={styles.cardButton}>Click Me</a>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Card Title</h3>
            <p className={styles.cardDescription}>
              This is a brief description of the card. It gives a quick overview
              of the content.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card" />
            <a className={styles.cardButton}>Click Me</a>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Card Title</h3>
            <p className={styles.cardDescription}>
              This is a brief description of the card. It gives a quick overview
              of the content.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card" />
            <a className={styles.cardButton}>Click Me</a>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Card Title</h3>
            <p className={styles.cardDescription}>
              This is a brief description of the card. It gives a quick overview
              of the content.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="https://via.placeholder.com/100" alt="Card" />
            <a className={styles.cardButton}>Click Me</a>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Card Title</h3>
            <p className={styles.cardDescription}>
              This is a brief description of the card. It gives a quick overview
              of the content.
            </p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
