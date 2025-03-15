/**
 * Fonction pour faire défiler en douceur vers une section spécifique
 * @param {string} id - L'ID de la section cible
 * @param {number} offset - Décalage en pixels (pour tenir compte de la barre de navigation fixe)
 */
export const scrollToSection = (id, offset = 80) => {
  // Empêcher le comportement par défaut du lien
  if (typeof window === 'undefined') return;
  
  // Trouver l'élément cible
  const element = document.getElementById(id);
  if (!element) return;
  
  // Calculer la position de défilement
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  // Faire défiler en douceur
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}; 