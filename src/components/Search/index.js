const Search = () => {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Digite o nome do usuário no github"
                onKeyUp={(e) => {
                    const { value } = e.target
                    const keyCode = e.key
                    const ENTER = "Enter"
                    if (keyCode === ENTER) {
                        fetch(`https://api.github.com/users/${value}`, { method: "GET" })
                            .then(response => response.json())
                            .then((data) => {
                                console.log(data);
                            }).catch(error => console.log(error));
                    }
                    console.log(keyCode)
                }}
            />
        </div>
    )
}

export default Search;