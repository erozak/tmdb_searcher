import React from 'react';
import { em } from 'polished'
import { GoMarkGithub } from 'react-icons/go';

import Gap from '../../elements/Gap';
import { Anchor } from '../../elements/Link';

import Block from './Block';

import { INFO } from './constants';

function AppFoot() {
  return (
    <Block>
      <Anchor mt={em(-2)} href={INFO.repositoryURL} color="light" target="_blank">
        <GoMarkGithub />
      </Anchor>
      <Anchor ml="1ch" href={INFO.githubPageURL} color="light" target="_blank">
        {INFO.name}
      </Anchor>
      <Gap>&copy;</Gap>
      <time dateTime={INFO.createTime}>
        {INFO.createTime}
      </time>
    </Block>
  );
}

export default AppFoot;
