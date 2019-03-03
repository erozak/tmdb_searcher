import { ifProp, prop } from 'styled-tools';

import styled from '../../styled';

export interface IGapBlockProps {
  noLeft?: boolean;
  noRight?: boolean;
  size?: string | number;
}

const GapBlock = styled('span')<IGapBlockProps>`
  padding-left: ${ifProp('noLeft', 0, prop('size', '1ch'))};
  padding-right: ${ifProp('noRight', 0, prop('size', '1ch'))};
`;

export default GapBlock;
