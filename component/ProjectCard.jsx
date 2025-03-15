import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.nom}
          width={500}
          height={300}
          className={styles.projectImage}
        />
        <div className={`${styles.overlay} ${isHovered ? styles.active : ''}`}>
          <div className={styles.overlayContent}>
            <h3 className={styles.projectTitle}>{project.nom}</h3>
            <p className={styles.projectType}>{project.type}</p>
            <div className={styles.technologies}>
              {project.languages.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech.replace(' -', '')}
                </span>
              ))}
            </div>
            <div className={styles.actions}>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                  aria-label="GitHub Repository"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}
              {project.lien && (
                <a 
                  href={project.lien} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                  aria-label="Live Demo"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              )}
              {project.video && (
                <button 
                  className={styles.actionButton}
                  aria-label="Watch Video"
                  onClick={() => window.open(project.video, '_blank')}
                >
                  <i className="bi bi-play-circle"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.nom}</h3>
        <p className={styles.cardType}>{project.type}</p>
      </div>
    </div>
  );
} 