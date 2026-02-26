/**
 * Uility to join class names together (replaces the library ClassNames to avoid dependencies).
 * Supports conditional classes passed as key-value pairs in an object.
 *
 * Example: classNames('btn', { 'btn--active': isActive })
 */
export const classNames = (...args) => {
  const classes = [];

  for (const arg of args) {
    // Handle strings and objects separately
    if (typeof arg === 'string' && arg.trim() !== '') {
      classes.push(arg.trim());
    } else if (typeof arg === 'object' && arg !== null) {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          if (key.trim() !== '') {
            classes.push(key.trim());
          }
        }
      }
    }
  }
  return classes.join(' ');
};
