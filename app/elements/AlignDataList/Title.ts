/* tslint:disable:no-magic-numbers */
import { dataListStyles } from '../DataList';

import styled from '../../styled';
import { ALIGN_DATA_LIST_AREA } from './constants';

const AlignDataListTitle = styled.dt`
  ${dataListStyles.dataListTitleStyle};

  grid-area: ${ALIGN_DATA_LIST_AREA.title};
  display: inline-flex;
  justify-items: flex-start;
  align-items: center;
  text-align: right;
`;

export default AlignDataListTitle;
