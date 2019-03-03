/* tslint:disable:no-magic-numbers */
import { em, margin } from 'polished';
import styled from '../../styled';
import { listStyle } from '../../styles/elements';

const InlineListItem = styled.li`
  ${margin(em(4))};

  flex: 0 0 auto;
`;

export default InlineListItem;
/* tslint:enable */
