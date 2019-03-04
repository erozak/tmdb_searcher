/* tslint:disable:no-magic-numbers */
import { em } from 'polished';

import styled from '../../styled';

const MovieCardInfo = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-start;
  font-size: ${em(18)};
`;

export default MovieCardInfo;
