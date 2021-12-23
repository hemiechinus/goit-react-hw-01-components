import user from './components/profile/user.json';
import Profile from './components/profile/SocialProfile';

function App() {
    return (
      <div>
        <Profile
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
        />
      </div>
    );
  }

  export default App;