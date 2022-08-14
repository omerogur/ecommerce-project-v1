import React, { useContext,useState } from 'react'
import FirebaseContext from '../../context/FirebaseContext'
import styles from './login.module.css'
const Login = () => {

   const {signIn,errorMessage} = useContext(FirebaseContext)
    
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = () => {
    
    signIn(email,password)
  }

  return (
    <>
   <h1>LOGİN PAGE </h1>


   <div className={styles.login}>
    <input type="email" placeholder='email giriniz' onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder='şifre giriniz' onChange={(e) => setPassword(e.target.value)}/>
    <p>{errorMessage}</p>
    <button onClick={login}>LOGİN</button>
   </div>
   </>
  )
}

export default Login
