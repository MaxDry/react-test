import logo from './logo.svg';
import './App.scss';
import MoviesPage from './containers/movies/MoviesPage';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>movies.js</h1>
        <h2>Test for Particeep</h2>
      </div>
      <MoviesPage />
    </div>
  );
}

export default App;
