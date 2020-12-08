const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="actions">
            <button onClick={(e) => getRepos(e)}>Ver repositórios</button>
            <button onClick={(e) => getStarred(e)}>Ver favoritos</button>
        </div>

    )
}

export default Actions;