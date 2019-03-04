/* tslint:disable:no-magic-numbers */
import { borderRadius } from 'polished';
import { width, WidthProps } from 'styled-system';
import styled from '../../styled';

export type IMovieCardPosterProps = WidthProps;

const MovieCardPoster = styled('div')<IMovieCardPosterProps>`
  ${width};
  ${({ theme }) => borderRadius('left', theme.others.rounded)};

  flex: 0 0 auto;
  display: flex;
  justify-items: stretch;
  align-items: center;
  overflow: hidden;

  & > img {
    flex: 1 1 100%;
    width: 100%;
    min-height: 100%;
  }
`;

export default MovieCardPoster;
