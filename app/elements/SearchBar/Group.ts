import { palette } from 'styled-tools';

import styled from '../../styled';

const SearchBarGroup = styled.label`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  border-bottom: 2px solid ${palette('primary')};
  color: ${palette('primary')};
`;

export default SearchBarGroup;
