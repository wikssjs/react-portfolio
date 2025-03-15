import SafeFormattedMessage from './utils/TranslationFallback';
import styles from '../styles/Skills.module.css';
import { useEffect } from 'react';

export default function Skills() {
  // Effet pour réinitialiser AOS après le rendu du composant
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      // Petit délai pour s'assurer que le DOM est complètement chargé
      setTimeout(() => {
        window.AOS.refresh();
      }, 100);
    }
  }, []);

  // Grouper les compétences par niveau d'expertise
  const skillGroups = {
    expert: {
      title: 'app.content.skills.expert',
      fallback: 'Expert',
      icon: 'bi-star-fill',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    advanced: {
      title: 'app.content.skills.advanced',
      fallback: 'Advanced',
      icon: 'bi-star-half',
      skills: ['Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL']
    },
    intermediate: {
      title: 'app.content.skills.intermediate',
      fallback: 'Intermediate',
      icon: 'bi-star',
      skills: ['PHP', 'MongoDB', 'Firebase', 'GraphQL']
    }
  };

  // Compétences par catégorie
  const categories = {
    frontend: {
      title: 'app.content.skills.frontend',
      fallback: 'Front-end',
      icon: 'bi-laptop',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'SASS/SCSS']
    },
    backend: {
      title: 'app.content.skills.backend',
      fallback: 'Back-end',
      icon: 'bi-server',
      skills: ['Node.js', 'Express', 'PHP', 'MySQL', 'MongoDB', 'Firebase', 'RESTful APIs', 'GraphQL']
    },
    tools: {
      title: 'app.content.skills.tools',
      fallback: 'Tools & Workflow',
      icon: 'bi-tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'Webpack', 'NPM', 'Agile/Scrum']
    }
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            <SafeFormattedMessage id="app.content.skills.title" fallback="Skills" />
          </h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.content}>
          {/* Affichage par catégorie */}
          <div className={styles.skillsGrid}>
            {Object.entries(categories).map(([key, category], index) => (
              <div 
                key={key} 
                className={styles.skillCategory} 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <h3 className={styles.categoryTitle}>
                  <i className={`bi ${category.icon}`}></i>
                  <SafeFormattedMessage id={category.title} fallback={category.fallback} />
                </h3>
                <div className={styles.skillTags}>
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className={styles.skillTag}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Section d'expertise */}
          <div 
            className={styles.expertiseSection} 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h3 className={styles.expertiseTitle}>
              <SafeFormattedMessage id="app.content.skills.expertise" fallback="Expertise Levels" />
            </h3>
            
            <div className={styles.expertiseLevels}>
              {Object.entries(skillGroups).map(([key, group], index) => (
                <div 
                  key={key} 
                  className={styles.expertiseLevel}
                  data-aos="fade-up" 
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className={styles.expertiseBadge}>
                    <i className={`bi ${group.icon}`}></i>
                    <h4>
                      <SafeFormattedMessage id={group.title} fallback={group.fallback} />
                    </h4>
                  </div>
                  <div className={styles.expertiseSkills}>
                    {group.skills.map((skill, i) => (
                      <span key={i} className={styles.expertiseSkill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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