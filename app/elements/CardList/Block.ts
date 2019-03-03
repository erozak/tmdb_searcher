import styled, { css } from '../../styled';

import { listStyle } from '../../styles/elements';
import { laptop, tablet } from '../../styles/media';

const cardListBlockTabletStyle = tablet(css`
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
`);

const cardListBlockLaptopStyle = laptop(css`
  grid-template-columns: repeat(3, 1fr);
`);

const CardListBlock = styled.ul`
  ${listStyle};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  margin: 0;

  ${cardListBlockTabletStyle};
  ${cardListBlockLaptopStyle};
`;

export default CardListBlock;
