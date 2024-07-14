import React, {useState, useContext} from 'react';

import {FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { getAuth , createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import {collection, addDoc, getFirestore} from 'firebase/firestore'


export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth();
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = auth.currentUser;
        updateProfile(user, { displayName: username }).then(() => {
          try {
            addDoc(collection(db, "users"), {
              id: user.uid,
              username: username,
              phone: phone,
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
        navigate("/login");
        console.log("User registered:", username);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          navigate('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
