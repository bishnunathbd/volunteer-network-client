import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div>
      <h3>Login With</h3>
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
    </div>
  );
};

export default Login;