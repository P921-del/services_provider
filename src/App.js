
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import ProjectRoutes from './Components/ProjectRoutes';
function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />

        <ProjectRoutes />
      </div>
    </Router>
  );
}

export default App;
