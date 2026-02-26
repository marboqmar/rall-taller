import './ButtonShowcase.css';
import { Button } from '../../../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Icon } from '../../../components/atoms/Icon/Icon';

export const ButtonShowcase = () => {
  return (
    <div className="button-showcase showcase-item">
      <Heading>Buttons</Heading>
      <div className="button-showcase__wrapper grid gap-md">
        {/* Buttons - styles */}
        <div className="button-showcase__column">
          <Heading level={3}>Styles</Heading>
          <Button className="button-showcase__button">Primary</Button>
          <Button className="button-showcase__button" style="secondary">
            Secondary
          </Button>
          <Button className="button-showcase__button" style="tertiary">
            Tertiary
          </Button>
          <Button className="button-showcase__button" style="transparent">
            Transparent
          </Button>
        </div>

        {/* Buttons - states */}
        <div className="button-showcase__column">
          <Heading level={3}>States</Heading>
          <Button className="button-showcase__button" disabled>
            Disabled
          </Button>
          <Button className="button-showcase__button button-showcase__example--focused">
            Focused
          </Button>
        </div>

        {/* Buttons - border radius */}
        <div className="button-showcase__column">
          <Heading level={3}>Border radius</Heading>
          <Button className="button-showcase__button" borderRadius="none">
            No border radius
          </Button>
          <Button className="button-showcase__button">Small border radius</Button>
          <Button className="button-showcase__button" borderRadius="lg">
            Large border radius
          </Button>
          <Button className="button-showcase__button" borderRadius="pill">
            Pill border radius
          </Button>
        </div>

        {/* Buttons - padding */}
        <div className="button-showcase__column">
          <Heading level={3}>Padding</Heading>
          <Button className="button-showcase__button" paddingSize="sm">
            Small padding
          </Button>
          <Button className="button-showcase__button" paddingSize="lg">
            Large padding
          </Button>
        </div>

        {/* Buttons - link */}
        <div className="button-showcase__column">
          <Heading level={3}>Links</Heading>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            style="primary"
            to={'/'}
          >
            Button-looking link
          </Button>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            style="secondary"
            to={'/'}
          >
            Button-looking link
          </Button>
          <p className="button-showcase__button">
            Lorem ipsum{' '}
            <Button component={Link} to={'/'}>
              inline link
            </Button>
            .
          </p>
        </div>

        {/* Buttons - icon */}
        <div className="button-showcase__column">
          <Heading level={3}>Icon buttons</Heading>
          <Button className="button-showcase__button" hasIcon>
            <span>Text and icon</span>
            <Icon isDecorative href="/assets/icons/check.svg" />
          </Button>
          <Button className="button-showcase__button" hasIcon>
            <Icon isDecorative href="/assets/icons/check.svg" />
            <span>Icon and text</span>
          </Button>
        </div>

        {/* Buttons - icon only */}
        <div className="button-showcase__column">
          <Heading level={3}>Icon only</Heading>

          <div className="button-showcase__icon-showcases">
            <Button isIconOnly ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
            <Button style="secondary" isIconOnly ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
            <Button style="tertiary" isIconOnly ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
          </div>
          <div className="button-showcase__icon-showcases">
            <Button isIconOnly isRound ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
            <Button style="secondary" isIconOnly isRound ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
            <Button style="tertiary" isIconOnly isRound ariaLabel="Open Calendar">
              <Icon isDecorative href="/assets/icons/check.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
