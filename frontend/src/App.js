import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
    </Router>
  );
};

export default App;
