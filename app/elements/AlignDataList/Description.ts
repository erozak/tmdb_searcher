/* tslint:disable:no-magic-numbers */
import { dataListStyles } from '../DataList';

import styled from '../../styled';
import { ALIGN_DATA_LIST_AREA } from './constants';

const AlignDataListDescription = styled.dd`
  ${dataListStyles.dataListDescriptionStyle};

  grid-area: ${ALIGN_DATA_LIST_AREA.description};
  display: inline-flex;
  justify-items: flex-start;
  align-items: center;
  text-align: left;
`;

export default AlignDataListDescription;
