import Actions from '../Actions';
import Repos from '../Repos';
import Search from '../Search';
import User from '../User';

const Container = () => (
    <div className="app">
        <Search />
        <User />
        <Actions />

        <Repos
            className="repos"
            title="Repositórios:"
            repos={[{
                name: "Nome do repositório", link: "#"
            }]} />

        <Repos
            className="starred"
            title="Favoritos:"
            repos={[{
                name: "Nome do repositório", link: "#"
            }]} />

    </div>
)

export default Container;