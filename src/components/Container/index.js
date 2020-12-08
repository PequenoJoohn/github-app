import PropTypes from 'prop-types';

import Actions from '../Actions';
import Repos from '../Repos';
import Search from '../Search';
import User from '../User';

const Container = ({ userinfo, repos, starred }) => (
    <div className="app">
        <Search />
        {!!userinfo && <User userinfo={userinfo} />}
        {!!userinfo && <Actions />}

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
