import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Digite o nome do usuário no github"
                onKeyUp={handleSearch}
            />
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search;