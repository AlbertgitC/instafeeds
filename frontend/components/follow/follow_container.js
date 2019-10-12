import { connect } from 'react-redux';
import Follow from './follow';
import { followUser } from '../../actions/follows_actions';




const mapStateToProps = ({ entities, session }, ownProps) => {
  return {
    user: entities.users[ownProps.props.match.params.userId],
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDipatchToProps = dispatch => {
  return {
    followUser: follow => dispatch(followUser(follow))
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(Follow)