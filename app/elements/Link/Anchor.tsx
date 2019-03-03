import { space, SpaceProps } from 'styled-system';

import styled from '../../styled';
import { linkStyle, ILinkStyleConfig, defaultLinkStyle } from './style';

export type IAnchorLinkProps = ILinkStyleConfig & SpaceProps;

const AnchorLinkBlock = styled('a')<IAnchorLinkProps>`
  ${space};
  ${linkStyle};
`;

AnchorLinkBlock.defaultProps = {
  ...defaultLinkStyle,
};

export default AnchorLinkBlock;
