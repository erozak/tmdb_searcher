/* tslint:disable:no-magic-numbers */
import { em, padding } from 'polished';
import styled from '../../styled';
import { listStyle } from '../../styles/elements';

const InlineListBlock = styled.ul`
  ${listStyle};

  ${padding(em(2))}

  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
`;

export default InlineListBlock;
/* tslint:enable */
