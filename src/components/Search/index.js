import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearch, isDisabled }) => {
    return (
        <div className="search">
            <FaSearch className="icon" color={"#000000"} size={26}/>
            <input
                type="search"
                placeholder="Digite o nome do usuário no github"
                onKeyUp={handleSearch}
                disabled={isDisabled}
            />
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search;