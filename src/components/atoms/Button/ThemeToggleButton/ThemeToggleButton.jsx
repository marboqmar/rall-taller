import { Button } from '../Button';
import { Icon } from '../../Icon/Icon';
import { useTheme } from '../../../../contexts/ThemeContext';

export const ThemeToggleButton = () => {
  const { activeTheme, toggleTheme } = useTheme();

  const isDarkTheme = activeTheme === 'dark';

  return (
    <Button
      className="header__theme-button"
      onClick={toggleTheme}
      style="transparent"
      isIconOnly
      isRound
      ariaLabel={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Icon isDecorative href={isDarkTheme ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg'} />
    </Button>
  );
};
