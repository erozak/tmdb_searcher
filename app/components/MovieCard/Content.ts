/* tslint:disable:no-magic-numbers */
import { em } from 'polished';

import styled from '../../styled';

const MovieCardInfo = styled.div`
  flex-grow: 1;
  display: flex;
  padding: ${em(16)};
  flex-direction: column;
  justify-content: stretch;
  align-content: flex-start;
  align-items: flex-start;
`;

export default MovieCardInfo;
