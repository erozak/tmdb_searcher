import React from 'react';
import { Link, LinkProps as IReactRouterLinkProps } from 'react-router-dom';
import { space, SpaceProps } from 'styled-system';

import styled from '../../styled';
import { linkStyle, ILinkStyleConfig, defaultLinkStyle } from './style';

export type ILinkProps = ILinkStyleConfig & SpaceProps & IReactRouterLinkProps;

const LinkBlock = styled<React.FunctionComponent<ILinkProps>>(({ color, ...otherProps }) => <Link {...otherProps} />)`
  ${space};
  ${linkStyle};
`;

LinkBlock.defaultProps = {
  ...defaultLinkStyle,
};

export default LinkBlock;
