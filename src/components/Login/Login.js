import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h3>Login With</h3>
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
    </div>
  );
};

export default Login;