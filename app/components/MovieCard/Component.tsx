import React from 'react';

import { getLocaleName } from '../../utils/locale';

import Card from '../../elements/Card';
import DataList from '../../elements/DataList';
import Content from './Content';
import Info from './Info';
import Poster, { IMovieCardPosterProps } from './Poster';
import Title from './Title';

import { IMeta, meta } from './meta';

export interface IMovieCardComponentProps {
  title: string;
  posterWidth: IMovieCardPosterProps['width'];
  poster?: string;
  language?: string;
  releaseDate?: string;
  titleScale?: number;
}

const MovieCardComponent: React.FC<IMovieCardComponentProps> = ({
  poster,
  title,
  language,
  releaseDate,
  titleScale,
  posterWidth,
}) => {
  const hasPoster = poster && poster.length > 0;

  const metadata: IMeta[] = [
    meta('Language', getLocaleName(language)),
    meta('Release Date', releaseDate),
  ];
  const Metadata = metadata.map(data =>
    data.description && data.description.length > 0 ? (
      <React.Fragment key={data.title}>
        <DataList.Title>{data.title}</DataList.Title>
        <DataList.Description>{data.description}</DataList.Description>
      </React.Fragment>
    ) : null,
  );

  return (
    <Card>
      <Poster width={posterWidth}>
        {hasPoster && <img src={poster} alt={title} />}
      </Poster>
      <Content>
        <Title fontSizeScale={titleScale}>{title}</Title>
        <Info>
          <DataList.Block>{Metadata}</DataList.Block>
        </Info>
      </Content>
    </Card>
  );
};

export default React.memo(MovieCardComponent);
