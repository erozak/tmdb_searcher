/* tslint:disable:no-magic-numbers */
import { em, padding } from 'polished';

import styled from '../../styled';
import { ALIGN_DATA_LIST_AREA } from './constants';

const gridRow = `"${ALIGN_DATA_LIST_AREA.title} ${
  ALIGN_DATA_LIST_AREA.description
}"`;

const AlignDataListBlock = styled.dl`
  ${padding(0, em(8))};

  display: grid;
  grid-template: "${gridRow}" / 42% 1fr;
  column-gap: ${em(4)};
  width: 100%;
`;

export default AlignDataListBlock;
