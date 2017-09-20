import { connect } from 'react-redux';

import {
  onTmdbQueryChange,
} from '../../../actions';

const QueryInput = props => (
  <input type="text" {...props} />
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispath => ({
  onChange: event => dispath(onTmdbQueryChange(event.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QueryInput);
