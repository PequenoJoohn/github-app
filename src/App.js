import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="search">
        <input
          type="search"
          placeholder="Digite o nome do usuário no github"
        />
      </div>
      <div className="user-info">
        <img src="https://avatars2.githubusercontent.com/u/25863252?v=4" alt="" />
        <h1>
          <a href="https://github.com/fdaciuk"> Jonathan Matos </a>
        </h1>

        <ul className="repos-info">
          <li>Repositórios: 29</li>
          <li>Seguidores: 35</li>
          <li>Seguindo: 49</li>
        </ul>

        <div className="actions">
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className="repos">
          <h2>Repositórios:</h2>
          <ul>
            <li><a href="#">Nome do repositório</a></li>
          </ul>
        </div>

        <div className="starred">
          <h2>Favoritos:</h2>
          <ul>
            <li><a href="#">Nome do repositório</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
