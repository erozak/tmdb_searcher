import { connect } from 'react-redux';

import {
  onTmdbDiscoverGet,
} from '../../../actions';
import TMDB from '../../../constants/TMDB';

const DiscoverButton = props => (
  <button type="button" {...props}>Discover</button>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispath => ({
  onClick: () => dispath(onTmdbDiscoverGet(TMDB.defaultOptions.discover)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverButton);
