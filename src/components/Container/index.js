import PropTypes from 'prop-types';

import Actions from '../Actions';
import Repos from '../Repos';
import Search from '../Search';
import User from '../User';

const Container = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        {isFetching && <div>Carregando...</div>}
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
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Container;
