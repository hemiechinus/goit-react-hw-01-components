import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';

import Profile from './components/profile/SocialProfile';
import Statistics from './components/statistics/statistics';
import FriendList from './components/FriendList/friendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';


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
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>

    );
  }

  export default App;