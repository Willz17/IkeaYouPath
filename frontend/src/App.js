import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/account' element={<Account />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  );
};

export default App;
