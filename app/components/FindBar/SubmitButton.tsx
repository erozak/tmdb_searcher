import deburr from 'lodash/deburr';
import flow from 'lodash/flow';
import trim from 'lodash/trim';
import React from 'react';
import { map, switchMapTo, take } from 'rxjs/operators';

import { useSubject } from '../../utils/useSubject';
import { FindBarContext } from './context';

export interface IFindBarSubmitButtonProps {
  onClick(query: string): void;
}

const FindBarSubmitButton: React.FunctionComponent<
  IFindBarSubmitButtonProps
> = ({ onClick }) => {
  const { query$ } = React.useContext(FindBarContext);
  const [click$, clickTrigger] = useSubject<
    React.MouseEvent<HTMLButtonElement>
  >();

  React.useEffect(() => {
    const emitQuery$ = click$.pipe(
      switchMapTo(query$.pipe(take(1))),
      map(
        flow(
          deburr,
          trim,
        ),
      ),
    );

    const subscription = emitQuery$.subscribe({
      next: onClick,
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [query$, click$, onClick]);

  return (
    <button type="button" onClick={clickTrigger}>
      Search
    </button>
  );
};

export default FindBarSubmitButton;
