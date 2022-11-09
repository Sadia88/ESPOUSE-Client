import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import App from "../App";
import app from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const UserContext = ({children}) => {
   const [user,setUser]=useState(null)
   const [loader,setLoader]=useState(true)

   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser===null || currentUser?.uid){
            setUser(currentUser)
          }
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
  
    

   const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
    

   const signIn=( email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
   }



   const UserProfile=()=>{
    return auth.currentUser;
}
const updateUserProfile=(profile)=>{

    return updateProfile(auth.currentUser,profile)
}



const logOut=()=>{
    setLoader(true)
    return signOut(auth)

}

   const googleSignin=()=>{
    return signInWithPopup(auth, googleProvider)
   }
const authInfo={user,loader,createUser, signIn,googleSignin,logOut,updateUserProfile,UserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default UserContext;
