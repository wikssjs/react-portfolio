import { useState } from 'react';
import SafeFormattedMessage from './utils/TranslationFallback';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'app.content.contact.location',
      titleFallback: 'Location',
      content: 'Montréal, Québec, Canada'
    },
    {
      icon: 'bi-envelope',
      title: 'app.content.contact.email',
      titleFallback: 'Email',
      content: 'jamesbell@gmail.com',
      link: 'mailto:jamesbell@gmail.com'
    },
    {
      icon: 'bi-phone',
      title: 'app.content.contact.phone',
      titleFallback: 'Phone',
      content: '+1 (514) 123-4567',
      link: 'tel:+15141234567'
    }
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            <SafeFormattedMessage id="app.content.contact.title" fallback="Contact" />
          </h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo} data-aos="fade-right" data-aos-delay="200">
            <h3 className={styles.infoTitle}>
              <SafeFormattedMessage id="app.content.contact.getInTouch" fallback="Get In Touch" />
            </h3>
            <p className={styles.infoText}>
              <SafeFormattedMessage id="app.content.contact.description" fallback="Feel free to contact me for any questions or collaboration opportunities. I'm always open to discussing exciting new projects." />
            </p>
            
            <div className={styles.infoItems}>
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.infoItem}
                  data-aos="fade-up" 
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className={styles.infoIcon}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className={styles.infoContent}>
                    <h4 className={styles.infoItemTitle}>
                      <SafeFormattedMessage id={item.title} fallback={item.titleFallback} />
                    </h4>
                    {item.link ? (
                      <a href={item.link} className={styles.infoItemText}>
                        {item.content}
                      </a>
                    ) : (
                      <p className={styles.infoItemText}>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.socialLinks} data-aos="fade-up" data-aos-delay="600">
              <a href="https://github.com/wikssjs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/james-bell-b9b1b9237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:jamesbell@gmail.com" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.contactForm} data-aos="fade-left" data-aos-delay="200">
            <h3 className={styles.formTitle}>
              <SafeFormattedMessage id="app.content.contact.sendMessage" fallback="Send Me A Message" />
            </h3>
            
            {submitSuccess && (
              <div className={styles.successMessage}>
                <i className="bi bi-check-circle"></i>
                <SafeFormattedMessage id="app.content.contact.success" fallback="Your message has been sent successfully!" />
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.error : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="name" className={styles.label}>
                    <SafeFormattedMessage id="app.content.contact.name" fallback="Name" />
                  </label>
                  <i className="bi bi-person"></i>
                </div>
                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="email" className={styles.label}>
                    <SafeFormattedMessage id="app.content.contact.email" fallback="Email" />
                  </label>
                  <i className="bi bi-envelope"></i>
                </div>
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <label htmlFor="subject" className={styles.label}>
                    <SafeFormattedMessage id="app.content.contact.subject" fallback="Subject" />
                  </label>
                  <i className="bi bi-chat-left-text"></i>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                    placeholder=" "
                    rows="5"
                  ></textarea>
                  <label htmlFor="message" className={styles.label}>
                    <SafeFormattedMessage id="app.content.contact.message" fallback="Message" />
                  </label>
                  <i className="bi bi-pencil"></i>
                </div>
                {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    <SafeFormattedMessage id="app.content.contact.sending" fallback="Sending..." />
                  </>
                ) : (
                  <>
                    <SafeFormattedMessage id="app.content.contact.send" fallback="Send" />
                    <i className="bi bi-send"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
      </div>
    </section>
  );
} 