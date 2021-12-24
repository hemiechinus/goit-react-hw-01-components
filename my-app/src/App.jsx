import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import Profile from './components/profile/SocialProfile';
import Statistics from './components/statistics/statistics';

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
        <Statistics title="Upload stats" stats={data}/>
      </div>

    );
  }

  export default App;