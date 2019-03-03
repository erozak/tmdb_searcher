/* tslint:disable:no-magic-numbers */

import { em } from 'polished';

import styled from '../../styled';
import { dataListTitleStyle } from './styles';

const DataListTitle = styled.dt`
  ${dataListTitleStyle};

  &:not(:first-child) {
    margin-top: ${em(8)};
  }
`;

export default DataListTitle;
