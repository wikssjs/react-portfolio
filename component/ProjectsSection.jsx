import { useState } from 'react';
import SafeFormattedMessage from './utils/TranslationFallback';
import ProjectCard from './ProjectCard';
import styles from '../styles/ProjectsSection.module.css';

export default function ProjectsSection({ webProjects, androidProjects }) {
  const [activeTab, setActiveTab] = useState('web');
  
  const projects = activeTab === 'web' ? webProjects : androidProjects;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <SafeFormattedMessage id="app.content.projects.title" fallback="Projects" />
          </h2>
          <div className={styles.separator}></div>
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'web' ? styles.active : ''}`}
            onClick={() => setActiveTab('web')}
            data-tab="web"
          >
            <i className="bi bi-globe"></i>
            <SafeFormattedMessage id="app.menu.project.web" fallback="Web" />
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'android' ? styles.active : ''}`}
            onClick={() => setActiveTab('android')}
            data-tab="android"
          >
            <i className="bi bi-android2"></i>
            <SafeFormattedMessage id="app.menu.project.android" fallback="Android" />
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={styles.projectItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 