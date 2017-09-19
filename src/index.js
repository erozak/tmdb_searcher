import 'babel-polyfill';
import 'font-awesome-webpack';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './normalize.css';
import '../sass/main.scss';

import store from './store';
import Layout from './scenes/Layout';

ReactDOM.render(
  (
    <Provider store={store}>
      <Layout />
    </Provider>
  ),
  document.querySelector('#app'),
);
