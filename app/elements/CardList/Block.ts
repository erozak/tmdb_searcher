/* tslint:disable:no-magic-numbers */
import styled from '../../styled';

import { listStyle } from '../../styles/elements';

const CardListBlock = styled.ul`
  ${listStyle};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: flex-start;
  grid-auto-flow: row;
  margin: 0;
`;

export default CardListBlock;
