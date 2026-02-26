import './IconShowcase.css';
import { Icon } from '../../../components/atoms/Icon/Icon';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const IconShowcase = () => {
  return (
    <div className="icon-showcase showcase-item">
      <Heading>Icons</Heading>
      <div className="icon-showcase__wrapper showcase-item__wrapper">
        <div className="icon-showcase__example showcase-item__example">
          <Heading level={3}>Decorative icon</Heading>
          <Paragraph>
            The following icon contains the HTML attributes <code>aria-hidden="true"</code>,{' '}
            <code>tabindex="-1"</code>, and <code>focusable="false"</code>.
          </Paragraph>
          <Icon isDecorative href="/assets/icons/check.svg" />
        </div>
        <div className="icon-showcase__example showcase-item__example">
          <Heading level={3}>Non decorative icon</Heading>
          <Paragraph>
            The following icon contains the HTML attributes <code>role="img"</code> and{' '}
            <code>aria-label</code>.
          </Paragraph>
          <Icon ariaLabel={'check mark'} href="/assets/icons/check.svg" />
        </div>
        <div className="icon-showcase__example showcase-item__example">
          <Heading level={3}>Different colors and sizes</Heading>
          <Paragraph>
            The color and size of the icon component can be modified using CSS, as demonstrated in
            the following icon.
          </Paragraph>
          <Icon
            isDecorative
            className="icon-showcase--large-colored"
            href="/assets/icons/check.svg"
          />
        </div>
        <div className="icon-showcase__example showcase-item__example">
          <Heading level={3}>Icon from a sprite file</Heading>
          <Paragraph>
            The icon component also allows to use icons from an external SVG sprite file. These
            icons can also be modified using CSS.
          </Paragraph>
          <Icon className="icon-showcase--large-colored" name="icon-check"></Icon>
        </div>
      </div>
    </div>
  );
};
