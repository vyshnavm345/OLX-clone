import React, {useEffect, useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';
import ProtectedRoute from './Components/protected/ProtectedRoute';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const { setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user);
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login'element={<Login />}></Route>
            
            <Route path='/create'element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }></Route>
          
            <Route path='/view'element={<View />}></Route>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
