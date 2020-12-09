import PropTypes from 'prop-types';

const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="actions">
            <button onClick={(e) => getRepos(e)}>Ver repositórios</button>
            <button onClick={(e) => getStarred(e)}>Ver favoritos</button>
        </div>

    )
}

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions;