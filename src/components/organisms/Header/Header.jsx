import './Header.css';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Link } from 'react-router-dom';
import { ThemeToggleButton } from '../../atoms/Button/ThemeToggleButton/ThemeToggleButton';
import { MobileMenu } from '../../molecules/MobileMenu/MobileMenu';
import { NavLink } from 'react-router-dom';

export const Header = ({ items }) => {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    // tabIndex needed for "scroll to top" button to also get focus to the top of the page
    <header role="banner" className="header" tabIndex="-1">
      <div className="header__wrapper container">
        <Button className="header__logo focus-like-hover" component={Link} hasIcon to="/">
          <Icon
            className="header__logo-icon"
            viewBox="0 0 512 512"
            ariaLabel="Logo"
            href="/favicon.svg"
          ></Icon>
          <span className="heading--5">Starter project</span>
        </Button>
        <div className="header__content">
          <div className="header__tablet">
            <div className="header__tablet-content">
              <nav className="header__tablet-links">
                {safeItems.map((link, index) => (
                  <NavLink
                    className="header__link button button--link"
                    key={`link-${index}`}
                    to={link.url}
                    onClick={() => setIsExpanded(false)}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </nav>
              <ThemeToggleButton />
            </div>
          </div>
          <div className="header__mobile">
            <ThemeToggleButton />
            <MobileMenu items={safeItems} />
          </div>
        </div>
      </div>
    </header>
  );
};
