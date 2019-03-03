import { produce } from 'immer';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export class Storage<T extends object> {
  public readonly state$: Observable<T>;
  private readonly stateSubject: BehaviorSubject<T>;
  private readonly state: T;

  constructor(private readonly initialState: T) {
    this.state = initialState;
    this.stateSubject = new BehaviorSubject(this.state);
    this.state$ = this.stateSubject.pipe(filter(Boolean));
  }

  public setState(draftState: (draft: T) => any) {
    const nextState = produce(this.state, draftState);

    this.stateSubject.next(nextState);
  }
  public resetState() {
    this.stateSubject.next(this.initialState);
  }
}
