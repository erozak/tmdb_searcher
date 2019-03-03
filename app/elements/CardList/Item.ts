/* tslint:disable:no-magic-numbers */
import { em, padding } from 'polished';

import styled, { css } from '../../styled';
import { tablet } from '../../styles/media';

const cardListItemTabletStyle = tablet(css`
  ${padding(em(0.5), 0)};
`);

const CardListItem = styled.li`
  ${padding(em(0.5))};

  display: flex;

  ${cardListItemTabletStyle};
`;

export default CardListItem;
/* tslint:enable */
