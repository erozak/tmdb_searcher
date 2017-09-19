import { fromJS as toImmutable } from 'immutable';

const state = toImmutable({
  listOpt: {},
  detail: {},
  movies: [],
  pagination: {/*
    total: <Number>,
    page: <Number>
  */},
});

export default state;
