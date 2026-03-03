import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import { Link } from 'react-router-dom';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: 'text',
      description: "The element to render (e.g., 'button', 'Link')",
    },
    buttonAppearance: {
      control: 'boolean',
    },
    to: {
      control: 'string',
    },
    role: {
      control: 'string',
    },
    isExternalLink: {
      control: 'boolean',
    },
    isIconOnly: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    style: 'primary',
    children: 'Primary Button',
  },
};

export const LinkAsButton = {
  args: {
    component: Link,
    to: '#',
    buttonAppearance: true,
    style: 'primary',
    isExternalLink: true,
    children: 'Link with button appearance',
  },
};

export const InternalLink = {
  args: {
    component: Link,
    to: '#',
    children: 'Internal link',
  },
};

export const ExternalLink = {
  args: {
    component: Link,
    to: '#',
    isExternalLink: true,
    children: 'External link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Adds "rel: noopener noreferrer" and "target: _blank" to open in a new tab',
      },
    },
  },
};

export const IconOnly = {
  args: {
    isIconOnly: true,
    ariaLabel: 'Close',
    children: <Icon isDecorative href="/assets/icons/cross.svg" />,
  },
};
