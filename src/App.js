
import './App.css';

import Login from './components/sign-in-up-pages/Login';
import Footer from './components/sign-in-up-pages/Footer';
import SignIn from './components/sign-in-up-pages/SignIn';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
