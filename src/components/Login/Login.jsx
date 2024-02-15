import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser]= useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const LoggedInUser = result.user;
            console.log(LoggedInUser);
            setUser(LoggedInUser);
        })
        .catch(error =>{
            console.log('error: ', error.message);
        })
    }
    const handleGithubSignIn =() =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const LoggedInUser = result.user;
            console.log(LoggedInUser);
            setUser(LoggedInUser);
        })
        .then(error =>{
            console.log('error: ', error);
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
                <>
                {/* Ternary Operator return one property thats why we create a div inside div we write many things no problem */}
                <button onClick={handleGoogleSignIn}>Google login</button>
                <button onClick={handleGithubSignIn}>Github login</button>
                </>
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