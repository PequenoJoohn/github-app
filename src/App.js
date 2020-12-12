import { useState } from 'react';

import Container from './components/Container';

function App() {

  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  function getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  function handleSearch(e) {
    const { value } = e.target;
    const keyCode = e.key
    const ENTER = "Enter"
    if (keyCode === ENTER) {
      setIsFetching(true);
      // e.target.disabled = true;
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
          /* Remove */
          setStarred([]);
          setRepos([]);
          setIsFetching(false);
        })
        .catch(error => console.log(error));
      }
  }

  function getRepos(type) {
    return (e) => {
      fetch(getGitHubApiUrl(userInfo.login, type), { method: "GET" })
        .then(response => response.json())
        .then((result) => {
            if (type === "starred") setStarred(result)
            if (type === "repos") setRepos(result);
        })
    }
  }

  return <Container
    userinfo={userInfo}
    repos={repos}
    starred={starred}
    isFetching={isFetching}
    handleSearch={(e) => handleSearch(e)}
    getRepos={getRepos('repos')}
    getStarred={getRepos('starred')}
  />
}

export default App;
