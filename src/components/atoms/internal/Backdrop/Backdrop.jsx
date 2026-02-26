import './Backdrop.css';

/**
 * Backdrop component
 *
 * Component props:
 * @param {boolean} isVisible - Whether the backdrop exists on the DOM or not.
 * @param {function} onClick - Function to execute when the backdrop is clicked.
 *
 * @example
 * <Backdrop isVisible={isExpanded} onClick={toggleMenu} />
 */

export const Backdrop = ({ isVisible, onClick }) => {
  // If backdrop is not active, do not render anything
  if (!isVisible) return null;

  return <div className="backdrop" onClick={onClick} aria-hidden="true"></div>;
};
