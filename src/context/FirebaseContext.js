import { createContext, useState,useEffect} from "react";
import {auth} from "../firebase.js"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
const FirebaseContext = createContext();


export const FirebaseProvider = ({children}) => {

    const register = async (name,email,password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)  
            console.log("sign resul",result); 
            }
             catch (error) {
                console.log("sign error ", error);
            }
    }

    const signIn = async (email,password) => {
       const signIn = await signInWithEmailAndPassword(auth,email,password)
       console.log("sign -->",signIn);  
    }

   
   

 return (
    <FirebaseContext.Provider value={{register,signIn}}
        >{children}
        </FirebaseContext.Provider>
 )

}


export default FirebaseContext;