import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import style from './FriendList.module.css';


export default function FriendList ({friends}){
    return (
        <div className={style.friendList}>
            <ul key={friends.id}>
                {friends.map(friend =>(
                    <FriendListItem 
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                    ))}
            </ul>
        </div>
    );
}   
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ),
  };