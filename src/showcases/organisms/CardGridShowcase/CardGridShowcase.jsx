import { CardGrid } from '../../../components/organisms/CardGrid/CardGrid';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Card } from '../../../components/organisms/Card/Card';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const CardGridShowcase = () => {
  return (
    <div className="card-grid-showcase showcase-item">
      <Heading>Card grid</Heading>
      <Paragraph>
        The number of cards per row can be modified with the variables <code>cardsPerRowMob</code>,{' '}
        <code>cardsPerRowTab</code>, and <code>cardsPerRowDes</code>.
      </Paragraph>
      <CardGrid>
        <Card
          title="Title"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
          imageSrc="/assets/images/test-image-md.webp"
          to="/"
        />
        <Card
          title="Title"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
          imageSrc="/assets/images/test-image-md.webp"
          to="/"
        />
        <Card
          title="Title"
          body="Lorem ipsum dolor sit amet"
          imageSrc="/assets/images/test-image-md.webp"
          to="/"
        />
        <Card
          title="Title"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
          imageSrc="/assets/images/test-image-md.webp"
          to="/"
        />
        <Card
          title="Title"
          body="Lorem ipsum dolor sit amet"
          imageSrc="/assets/images/test-image-md.webp"
          to="/"
        />
      </CardGrid>
    </div>
  );
};
