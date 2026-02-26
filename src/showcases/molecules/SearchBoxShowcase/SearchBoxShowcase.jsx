import { SearchBox } from '../../../components/molecules/SearchBox/SearchBox';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { useState } from 'react';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const SearchBoxShowcase = () => {
  const [searchedQuery, setSearchedQuery] = useState('');

  const handleSearchSubmit = searchTerm => {
    setSearchedQuery(searchTerm);
  };

  return (
    <div className="search-box-showcase showcase-item">
      <Heading>Search box</Heading>
      <SearchBox
        inputAriaLabel="Search box"
        inputPlaceholder="Search"
        onSubmit={handleSearchSubmit}
      />

      {searchedQuery && (
        <div className="search-box-showcase__searched-query">
          <Paragraph>
            You searched for: <strong>{searchedQuery}</strong>
          </Paragraph>
        </div>
      )}
    </div>
  );
};
