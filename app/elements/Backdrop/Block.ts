/* tslint:disable:no-magic-numbers */
import { cover, em, linearGradient } from 'polished';

import styled from '../../styled';

export const BACKDROP_CLASS_NAME = 'backdrop-main';

const BackdropBlock = styled.div`
  ${cover()};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  background-position: 50%;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;

  & > ${BACKDROP_CLASS_NAME} {
    ${cover()};

    position: absolute;
    z-index: 1;
  }

  &::after {
    ${({ theme }) =>
      linearGradient({
        colorStops: [`${theme.palette.secondary[0]} 15%`, 'transparent'],
        toDirection: 'to top',
        fallback: 'transparent',
      })};

    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: ${em(480)};
    max-height: 35vh;
    background-size: 100%;
    z-index: 2;
  }
`;

export default BackdropBlock;
/* tslint:enable */
