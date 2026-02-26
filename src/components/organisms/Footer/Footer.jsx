import './Footer.css';
import { classNames } from '../../../utils/helpers';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Button } from '../../../components/atoms/Button/Button';
import { Icon } from '../../../components/atoms/Icon/Icon';
import { Link } from 'react-router-dom';

/**
 * Footer component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {Object[]} items - Content of the footer link columns.
 * @param {string} items[].heading - The heading on top of the links column (not a link).
 * @param {Object[]} items[].links - The content of the links.
 * @param {string} items[].links[].text - The text of the links.
 * @param {string} items[].links[].url - The URL of the links.
 * @param {Object[]} socialMedia - Content of the available social media.
 * @param {Object[]} socialMedia[].url - The URL of the social media link.
 * @param {Object[]} socialMedia[].ariaLabel - Accessible text for the social media link.
 * @param {Object[]} socialMedia[].iconHref - Path to the icon for the social media link.
 * @param {Boolean} isCompact - Adds class to style as compact footer.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const footerItems = [
 *   {
 *     heading: 'Test column',
 *     links: [
 *       { text: 'Lorem ipsum', url: '/' },
 *       { text: 'Lorem ipsum', url: '/' },
 *     ],
 *   },
 *   {
 *     heading: 'Test column',
 *     links: [
 *       { text: 'Lorem ipsum', url: '/' },
 *       { text: 'Lorem ipsum', url: '/' },
 *     ],
 *   },
 * ];
 *
 * const footerSocial = [
 *   { url: '/', iconHref: '/assets/icons/instagram.svg', ariaLabel: 'Instagram (opens in a new tab)' },
 *   { url: '/', iconHref: '/assets/icons/facebook.svg', ariaLabel: 'Facebook (opens in a new tab)' },
 * ];
 *
 * <Footer items={footerItems} socialMedia={footerSocial} />
 */

export const Footer = ({ className = '', items = [], socialMedia = [], isCompact, ...rest }) => {
  const safeItems = Array.isArray(items) ? items : [];
  const safeSocialMedia = Array.isArray(socialMedia) ? socialMedia : [];

  return (
    <footer
      role="contentinfo"
      className={classNames('footer', { 'footer--compact': isCompact }, className)}
      {...rest}
    >
      <div className="container footer__wrapper">
        {/* Screen reader heading */}
        <Heading className="sr-only">Footer</Heading>

        {/* Top content */}
        <div className="footer__content-top">
          {/* Logo */}
          <Button className="footer__logo focus-like-hover" component={Link} hasIcon to="/">
            <Icon
              className="footer__logo-icon"
              viewBox="0 0 512 512"
              ariaLabel="Home"
              href="/favicon.svg"
            ></Icon>
            <span className="heading--5">Starter project</span>
          </Button>

          {/* Navigation */}
          <nav className="footer__columns-group" aria-label="Footer navigation">
            {safeItems.map((column, index) => (
              <div key={`col-${index}`} className="footer__column">
                {column.heading && (
                  <Heading className="footer__heading paragraph" level={3}>
                    {column.heading}
                  </Heading>
                )}
                <ul className="footer__links-group">
                  {column.links?.map((link, linkIndex) => (
                    <li key={`link-${index}-${linkIndex}`}>
                      <Button className="footer__link" component={Link} to={link.url}>
                        {link.text}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom content */}
        <div className="footer__content-bottom">
          {/* Social media */}
          {safeSocialMedia.length > 0 && (
            <nav aria-label="Social media links">
              <ul className="footer__social-media">
                {safeSocialMedia.map((link, index) => (
                  <li key={`link-${index}`}>
                    <Button
                      className="footer__social-media-link"
                      component={Link}
                      to={link.url}
                      ariaLabel={link.ariaLabel}
                      isExternalLink
                    >
                      <Icon className="footer__social-media-icon" href={link.iconHref}></Icon>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
};
