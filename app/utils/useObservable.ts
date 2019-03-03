import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export default function useObservable<T>(
  observable: Observable<T>,
  initialState?: T | (() => T),
): T {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    const subscription = observable.subscribe({
      next(source) {
        setValue(source);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
}
