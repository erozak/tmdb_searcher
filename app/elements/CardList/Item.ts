/* tslint:disable:no-magic-numbers */
import { em, padding } from 'polished';
import { height, HeightProps, width, WidthProps } from 'styled-system';

import styled, { css } from '../../styled';
import { tablet } from '../../styles/media';

const cardListItemTabletStyle = tablet(css`
  ${padding(em(0.5), 0)};
`);

export type ICardListItemProps = WidthProps & HeightProps;

const CardListItem = styled('li')<ICardListItemProps>`
  ${width};
  ${height};
  ${padding(em(0.5))};

  display: flex;
  margin: ${em(8)};

  ${cardListItemTabletStyle};
`;

export default CardListItem;
/* tslint:enable */
