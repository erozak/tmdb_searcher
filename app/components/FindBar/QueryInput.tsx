import React from 'react';

import useObservable from '../../utils/useObservable';
import { FIELD_NAME } from './constants';
import { FindBarContext } from './context';

const FindBarQueryInput: React.FunctionComponent = () => {
  const { query$, pushQuery } = React.useContext(FindBarContext);
  const query = useObservable(query$, '');

  const onInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      pushQuery(event.currentTarget.value);
    },
    [pushQuery],
  );

  return (
    <input
      type="text"
      placeholder="Movie, TV Series ..."
      name={FIELD_NAME.query}
      value={query}
      onChange={onInputChange}
    />
  );
};

export default FindBarQueryInput;
