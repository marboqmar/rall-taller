import './CardShowcase.css';
import { Card } from '../../../components/organisms/Card/Card';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const CardShowcase = () => {
  return (
    <div className="card-showcase showcase-item">
      <Heading>Card</Heading>
      <div className="card-showcase__wrapper">
        <div className="card-showcase__example showcase-item__example">
          <Heading level={3}>Card with image and link</Heading>
          <Card
            title="Title"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            imageSrc="/assets/images/test-image-md.webp"
            to="/"
          />
        </div>
        <div className="card-showcase__example showcase-item__example">
          <Heading level={3}>Card without image and link</Heading>
          <Card
            title="Title"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
          />
        </div>
      </div>
    </div>
  );
};
