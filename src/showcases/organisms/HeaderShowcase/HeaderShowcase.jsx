import { Header } from '../../../components/organisms/Header/Header';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { HEADER_ITEMS } from '../../../constants/header.constants';

export const HeaderShowcase = () => {
  return (
    <div className="header-showcase showcase-item">
      <Heading>Header</Heading>
      <Header items={HEADER_ITEMS} />
    </div>
  );
};
