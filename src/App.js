import { useState } from 'react';
import './App.css';

import Container from './components/Container';

function App() {

  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  function handleSearch(e) {
    const { value } = e.target
    const keyCode = e.key
    const ENTER = "Enter"
    if (keyCode === ENTER) {
      fetch(`https://api.github.com/users/${value}`, { method: "GET" })
        .then(response => response.json())
        .then((data) => {
          setUserInfo({
            username: data.name,
            photo: data.avatar_url,
            login: data.login,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following
          })
        })
        .catch(error => console.log(error));
    }
  }

  function getRepos(type) {
    return (e) => {
      fetch(`https://api.github.com/users/${userInfo.login}/${type}`, { method: "GET" })
        .then(response => response.json())
        .then((data) => {
          // if(type) {
          //   return setRepos(data)
          // }
          // setStarred(data)
          console.log(data);
        })
    }
  }

  return <Container
    userinfo={userInfo}
    repos={repos}
    starred={starred}
    handleSearch={(e) => handleSearch(e)}
    getRepos={getRepos('repos')}
    getStarred={getRepos('starred')}
  />
}

export default App;
