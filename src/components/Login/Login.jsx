import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser]= useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const LoggedInUser = result.user;
            console.log(LoggedInUser);
            setUser(LoggedInUser);
        })
        .catch(error =>{
            console.log('error: ', error.message);
        })
    }
    const handleGoogleSignOut= ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
           

            {/* if user is login then just show the sign out button and if user not log in yet then just show sign in button */}
            {
                 user?
                <button onClick={handleGoogleSignOut}>Google SignOut</button> : 
                <button onClick={handleGoogleSignIn}>Google login</button>
            }

           {
            user && <div>
            <h3>{user.displayName}</h3>
            <h3>{user.email}</h3>
            <img src={user.photoURL} alt="" />
        </div>
           }
       
        </div>
        
    );
};

export default Login;