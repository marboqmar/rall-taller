import '../css/pages/Homepage.css';
import { Heading } from '../components/atoms/Heading/Heading';
import { Paragraph } from '../components/atoms/Paragraph/Paragraph';
import { List } from '../components/atoms/List/List';
import {
  TECH_STACK,
  PROJECT_STRUCTURE,
  SHOWCASES_CLEAN_UP,
  VARIABLES,
  BREAKPOINTS,
  BREAKPOINTS_USAGE,
  NEW_PAGE_STEPS,
  GETTING_STARTED,
  AVAILABLE_SCRIPTS,
} from './Homepage.data';
import { Button } from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="homepage container">
      {/* Header */}
      <header className="homepage__header">
        <Heading level={1}>Starter project</Heading>
        <Paragraph>
          This is a starter template designed to serve as a solid foundation for web projects. It
          provides a library of <strong>essential, accessible, easily customizable</strong>&nbsp;
          components while maintaining a minimal dependency footprint. It also provides live
          showcases of these components.
        </Paragraph>
        <Paragraph>
          The goal is to provide all the core building blocks needed for modern web development
          without the overhead of unnecessary third-party packages.
        </Paragraph>
      </header>

      {/* Tech stack */}
      <section className="homepage__section" aria-labelledby="tech-stack-heading">
        <Heading id="tech-stack-heading">Tech stack</Heading>
        <div className="homepage__tech-stack-group">
          <Paragraph>The technology stack used to create this project is:</Paragraph>
          <List items={TECH_STACK} />
        </div>
      </section>

      {/* Why CSS */}
      <section className="homepage__section" aria-labelledby="why-css-heading">
        <Heading id="why-css-heading">Why CSS rather than SCSS?</Heading>
        <Paragraph>
          The author prefers CSS over SCSS, as nesting is not found easier to read, especially in
          very large files. Apart from nesting, the author sees no real advantage in using SCSS,
          since CSS now supports variables (custom properties) and does not require compilation,
          which is a significant benefit.
        </Paragraph>
        <Paragraph>
          While CSS lacks mixins, the author does not consider using multiple classes instead of
          mixins a major drawback.
        </Paragraph>
        <Paragraph>
          Another limitation is that CSS variables cannot be used in <code>@media</code> queries,
          which requires writing breakpoints manually. However, the author still considers the fact
          that CSS does not need to be compiled a major benefit.
        </Paragraph>
      </section>

      {/* Getting started */}
      <section className="homepage__section" aria-labelledby="getting-started-heading">
        <Heading id="getting-started-heading">Getting started</Heading>
        <div className="homepage__getting-started-group">
          <Paragraph>To set up this project:</Paragraph>
          <List ordered items={GETTING_STARTED} />
        </div>

        {/* Sub-section - available scripts */}
        <section className="homepage__sub-section" aria-labelledby="scripts-heading">
          <Heading id="scripts-heading" level={3}>
            Available scripts
          </Heading>
          <List items={AVAILABLE_SCRIPTS} />
        </section>
      </section>

      {/* Project structure */}
      <section className="homepage__section" aria-labelledby="project-structure-heading">
        <Heading id="project-structure-heading">Project structure</Heading>
        <div className="homepage__project-structure-group">
          <Paragraph>The structure of this project is as follows:</Paragraph>
          <pre>
            <code>{PROJECT_STRUCTURE}</code>
          </pre>
        </div>
      </section>

      {/* Showcases */}
      <section className="homepage__section" aria-labelledby="showcases-heading">
        <Heading id="showcases-heading">Showcases</Heading>
        <Paragraph>
          This project includes live showcases to demonstrate how components behave and interact.
          You can view them here:
        </Paragraph>
        <div className="homepage__showcases-links-wrapper grid">
          <Button
            className="homepage__showcase-link"
            component={Link}
            buttonAppearance
            style={'primary'}
            to="/grid"
          >
            Grid
          </Button>
          <Button
            className="homepage__showcase-link"
            component={Link}
            buttonAppearance
            style={'primary'}
            to="/atoms"
          >
            Atoms
          </Button>
          <Button
            className="homepage__showcase-link"
            component={Link}
            buttonAppearance
            style={'primary'}
            to="/molecules"
          >
            Molecules
          </Button>
          <Button
            className="homepage__showcase-link"
            component={Link}
            buttonAppearance
            style={'primary'}
            to="/organisms"
          >
            Organisms
          </Button>
        </div>

        {/* Sub-section - clean up */}
        <section className="homepage__sub-section" aria-labelledby="clean-up-heading">
          <Heading id="clean-up-heading" level={3}>
            Clean up showcases
          </Heading>
          <div className="homepage__clean-up-group">
            <Paragraph>
              When you are ready to start building your actual site, you can remove the showcases'
              files and references to keep your project clean:
            </Paragraph>
            <List items={SHOWCASES_CLEAN_UP} />
          </div>
        </section>
      </section>

      {/* Customisation */}
      <section className="homepage__section" aria-labelledby="customisation-heading">
        <Heading id="customisation-heading">Customisation</Heading>
        <Paragraph>
          The top priority of this project is to provide components that accessible and can be
          customised quickly and easily.
        </Paragraph>

        {/* Sub-section - variables */}
        <section className="homepage__sub-section" aria-labelledby="variables-heading">
          <Heading id="variables-heading" level={3}>
            Variables
          </Heading>
          <div className="homepage__variables-group">
            <Paragraph>
              To adapt the components of this project to your designs, modify the variables found in
              the following files:
            </Paragraph>
            <List items={VARIABLES} />
          </div>
          <Paragraph>
            All variables use CSS custom properties, so you can override them in your own CSS files
            or modify them directly in these files.
          </Paragraph>
          <Paragraph>
            Also, modify the container and grid classes as needed. These can be found in&nbsp;
            <code>src/css/global/layout.css</code> and <code>src/css/global/grid-utils.css</code>.
          </Paragraph>
        </section>

        {/* Sub-section - typography */}
        <section className="homepage__sub-section" aria-labelledby="typography-heading">
          <Heading id="typography-heading" level={3}>
            Typography
          </Heading>
          <Paragraph>
            To modify the typography, update the variables in&nbsp;
            <code>src/css/global/typography-variables.css</code>, and then adjust the font link
            in&nbsp;
            <code>index.html</code>.
          </Paragraph>
          <Paragraph>
            The <code>code</code>&nbsp;tag styling is located in&nbsp;
            <code>src/css/global/site.css</code>.
          </Paragraph>
          <Paragraph>
            The <code>--icon-alignment-height</code> variable (located in&nbsp;
            <code>src/css/global/typography-variables.css</code>) is a 'first-line anchor', used to
            align the icon to the first line of text. It uses the variables&nbsp;
            <code>--line-height-base</code>&nbsp;and&nbsp;
            <code>--font-size-base</code>&nbsp;to calculate the height the first line of text has
            and align the icon accordingly. If the line height or font sizes used are different,
            update this variable accordingly.
          </Paragraph>
        </section>

        {/* Sub-section - breakpoints */}
        <section className="homepage__sub-section" aria-labelledby="breakpoints-heading">
          <Heading id="breakpoints-heading" level={3}>
            Breakpoints
          </Heading>
          <div className="homepage__breakpoints-definition-group">
            <Paragraph>The breakpoints used for this project are:</Paragraph>
            <List items={BREAKPOINTS} />
          </div>
          <div className="homepage__breakpoints-usage-group">
            <Paragraph>Usage in CSS:</Paragraph>
            <pre>
              <code>{BREAKPOINTS_USAGE}</code>
            </pre>
          </div>
          <Paragraph>
            CSS variables cannot be used in&nbsp;<code>@media</code>&nbsp;queries, so breakpoint
            values must be written manually. Consequently, in order to modify these breakpoints, do
            a global search and replace all instances manually across your CSS files.
          </Paragraph>
        </section>
      </section>

      {/* New pages */}
      <section className="homepage__section" aria-labelledby="new-pages-heading">
        <Heading id="new-pages-heading">New pages</Heading>
        <div className="homepage__new-pages-group">
          <Paragraph>To create a new page, follow these steps:</Paragraph>
          <List ordered items={NEW_PAGE_STEPS} />
        </div>
      </section>
    </div>
  );
};
