import './App.css';
import Header from './Header';
import Stories from './Stories';
import NewPost from './NewPost';
import FriendsOn from './FriendsOn';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <NewPost />
      <FriendsOn />
      <Feed />
    </div>
  );
}

export default App;