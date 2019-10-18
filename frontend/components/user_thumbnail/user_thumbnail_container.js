import { connect } from 'react-redux';
import UserThumb from './user_thumbnail';





const mapStateToProps = ({ entities, session }, ownProps) => {

  return {
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDipatchToProps = dispatch => {
  return {
    
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(UserThumb)