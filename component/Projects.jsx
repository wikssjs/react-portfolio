import { useState } from 'react';
import Image from 'next/image';
import SafeFormattedMessage from './utils/TranslationFallback';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern e-commerce platform with product catalog, cart functionality, and secure checkout.',
      image: '/project1.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      image: '/project2.jpg',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      image: '/project3.jpg',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application providing real-time forecasts and weather data visualization.',
      image: '/project4.jpg',
      category: 'app',
      technologies: ['JavaScript', 'Weather API', 'Chart.js'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'A social networking platform with user profiles, posts, and real-time messaging.',
      image: '/project5.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
      image: '/project6.jpg',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Health API'],
      link: 'https://github.com/wikssjs',
      demo: 'https://github.com/wikssjs'
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'App' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            <SafeFormattedMessage id="app.content.projects.title" fallback="Projects" />
          </h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.filters} data-aos="fade-up" data-aos-delay="200">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              data-aos="fade-up" 
              data-aos-delay={200 + (index * 100)}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <i className="bi bi-eye"></i>
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.technology}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  );
} 