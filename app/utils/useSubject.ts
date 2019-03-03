import { useMemo } from 'react';
import { BehaviorSubject, Subject } from 'rxjs';

export function createRxSubjectRef<T>(subjectCreator: () => Subject<T>) {
  const pair = useMemo((): [Subject<T>, (nextValue: T) => void] => {
    const subject$ = subjectCreator();
    const pushNext = (nextValue: T) => {
      subject$.next(nextValue);
    };

    return [subject$, pushNext];
  }, []);

  return pair;
}

export const useSubject = <T>() => createRxSubjectRef(() => new Subject<T>());
export const useBehaviorSubject = <T>(initialValue?: T) =>
  createRxSubjectRef(() => new BehaviorSubject<T>(initialValue));
