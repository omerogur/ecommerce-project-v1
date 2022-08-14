import { createContext, useState,useEffect} from "react";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}     from 'firebase/auth'
import { auth } from "../firebase.js";
import { async } from "@firebase/util";

const FirebaseContext = createContext();


export const FirebaseProvider = ({children}) => {

    const [authToken,setAuthToken] = useState()
    const [user,setUser] = useState(null)
    const [errorMessage,setErrorMessage] = useState("")

    const register = async (email,password) => {
        try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        setUser(result.user)
        setAuthToken(result.user.accesToken)
            
        }
         catch (error) {
            console.log("sign error ", error);
        }

    }
    
    const signIn = async(email,password) => {
        try {
            await signInWithEmailAndPassword(auth,email,password)
            console.log("giriş başarılı");
        } catch(error)  {
            switch(error.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setErrorMessage();
                     break;
                case "auth/wrong-password":
                    setErrorMessage(error.code);
                     break;
            }
            console.log(error);
        }
            
    }
   

 return (
    <FirebaseContext.Provider value={{
        authToken,
        user,
        register,
        signIn,
        errorMessage,

        }}
        >{children}
        </FirebaseContext.Provider>
 )

}


export default FirebaseContext;