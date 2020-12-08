import PropTypes from 'prop-types';

import Actions from '../Actions';
import Repos from '../Repos';
import Search from '../Search';
import User from '../User';

const Container = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    <div className="app">
        <Search handleSearch={handleSearch} />
        {!!userinfo && <User userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && <Repos
            className="repos"
            title="Repositórios:"
            repos={repos} />}

        {!!starred.length && <Repos
            className="starred"
            title="Favoritos:"
            repos={starred} />}
    </div>
)

Container.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default Container;
