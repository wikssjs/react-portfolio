import { FormattedMessage } from 'react-intl';

/**
 * Composant qui affiche une traduction avec un texte de secours si la traduction est manquante
 * @param {string} id - L'identifiant de la traduction
 * @param {string} fallback - Le texte à afficher si la traduction est manquante
 * @param {object} values - Les valeurs à injecter dans la traduction
 */
export default function SafeFormattedMessage({ id, fallback, values = {} }) {
  // Si le texte de secours n'est pas fourni, utiliser l'ID comme secours
  const defaultFallback = fallback || id.split('.').pop();
  
  return (
    <FormattedMessage
      id={id}
      defaultMessage={defaultFallback}
      values={values}
    />
  );
} 