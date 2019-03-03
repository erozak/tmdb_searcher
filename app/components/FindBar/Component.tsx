import React from 'react';
import { FiSearch } from 'react-icons/fi';

import SearchBar from '../../elements/SearchBar';

import { em } from 'polished';
import QueryInput from './QueryInput';
import SubmitButton, { IFindBarSubmitButtonProps } from './SubmitButton';

// tslint:disable-next-line:no-magic-numbers
const ICON_OFFEST_FIX = em(-2);

export interface IFindBarProps {
  searchMovie: IFindBarSubmitButtonProps['onClick'];
}

const FindBar: React.FunctionComponent<IFindBarProps> = ({ searchMovie }) => (
  <SearchBar.Block>
    <SearchBar.Group>
      <SearchBar.GroupIcon mt={ICON_OFFEST_FIX}>
        <FiSearch />
      </SearchBar.GroupIcon>
      <SearchBar.GroupField>
        <QueryInput />
      </SearchBar.GroupField>
    </SearchBar.Group>
    <SearchBar.Action>
      <SubmitButton onClick={searchMovie} />
    </SearchBar.Action>
  </SearchBar.Block>
);

export default React.memo(FindBar);
