/* tslint:disable:no-magic-numbers */
import { em } from 'polished';

import styled from '../../styled';

export interface IMovieTitleProps {
  fontSizeScale?: number;
}

const MovieCardTitle = styled('div')<IMovieTitleProps>`
  flex: 1 0 auto;
  font-size: ${({ fontSizeScale }) =>
    em(`${Number(32 * fontSizeScale).toPrecision(3)}px`)};
  font-family: ${({ theme }) => theme.fontFamilies.title};
  line-height: 1.2;
`;

MovieCardTitle.defaultProps = {
  fontSizeScale: 1,
};

export default MovieCardTitle;
