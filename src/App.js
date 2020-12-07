import './App.css';
import Actions from './components/Actions';
import Repos from './components/Repos';

import Search from './components/Search';
import User from './components/User';

function App() {
  return (
    <div className="app">
      <Search />
      <User />
      <Actions />
      <Repos className="repos" title="Repositórios:" repos={[{
        name: "Nome do repositório", link: "#"
      }]} />

      <Repos className="starred" title="Favoritos:" repos={[{
        name: "Nome do repositório", link: "#"
      }]} />


    </div>
  );
}

export default App;
