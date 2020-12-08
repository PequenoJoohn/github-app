import { useState } from 'react';
import './App.css';

import Container from './components/Container';

function App() {

  const [userInfo, setUserInfo] = useState({
    username: "Dimitri",
    repos: 12,
    followers: 10,
    following: 10
  });
  const [repos, setRepos] = useState([{
    name: 'Repo',
    link: "#"
  }]);
  const [starred, setStarred] = useState([{
    name: "Repo",
    link: "#"
  }]);

  return <Container
    userinfo={userInfo}
    repos={repos}
    starred={starred}
  />
}

export default App;
