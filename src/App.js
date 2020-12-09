import { useState } from 'react';
import './App.css';

import Container from './components/Container';

function App() {

  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  function getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  function handleSearch(e) {
    const { value } = e.target;
    const keyCode = e.key
    const ENTER = "Enter"
    if (keyCode === ENTER) {
      fetch(getGitHubApiUrl(value), { method: "GET" })
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
          setStarred([]);
          setRepos([]);
        })
        .catch(error => console.log(error));
    }
  }

  function getRepos(type) {
    return (e) => {
      fetch(getGitHubApiUrl(userInfo.login, type), { method: "GET" })
        .then(response => response.json())
        .then((data) => {
          const types = data.map((repo) => {
            return {
              name: repo.name,
              link: repo.html_url
            }
          })
          if (type === "repos") setRepos(types);
          if (type === "starred") setStarred(types);
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
