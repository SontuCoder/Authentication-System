import './App.css';
import { Route,Routes} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
