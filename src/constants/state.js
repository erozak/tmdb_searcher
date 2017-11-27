import { fromJS as toImmutable } from 'immutable';

const state = toImmutable({
  query: '',
  listOpt: {},
  detail: undefined,
  movies: [],
  pagination: {/*
    total: <Number>,
    page: <Number>
  */},
});

export default state;
