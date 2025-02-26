
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import ProjectRoutes from './Components/ProjectRoutes';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <Header />
      </div>
      <ProjectRoutes />
    </Router>
  );
}

export default App;
