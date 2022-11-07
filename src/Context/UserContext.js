import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import App from "../App";
import app from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext()
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const UserContext = ({children}) => {
   const [user,setUser]=useState(null)
   const [loader,setLoader]=useState(true)


useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        // console.log(currentUser)
        setUser(currentUser)
        setLoader(false)
    })

    return ()=>{
        return unsubscribe()
    }

},
[])
  
    

   const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
    

   const signIn=( email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

const logOut=()=>{
    return signOut(auth)
}

   const googleSignin=()=>{
    return signInWithPopup(auth, googleProvider)
   }
const authInfo={user,loader,createUser, signIn,googleSignin,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;
