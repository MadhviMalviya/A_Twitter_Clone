
import './App.css';
import Login from './components/sign-in-up-pages/Login';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import SignUp from './components/sign-in-up-pages/SignUp';
import ProtectedRoute from './services/ProtectedRoute';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signin' element={<SignUp/>}/>


    <Route path='/' element={<ProtectedRoute/>}>
    <Route path='/' element={<Home/>}/>           //home page is wrapped by the route that has path for login
    </Route>


    </Routes>
  

    </div>
  );
}

export default App;
