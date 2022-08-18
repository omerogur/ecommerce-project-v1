import React, { useContext,useState } from 'react'
import FirebaseContext from '../../context/FirebaseContext'
import styles from './login.module.css'
import {FacebookFilled,GithubOutlined,GooglePlusOutlined} from '@ant-design/icons';
const Login = () => {

   const {signIn} = useContext(FirebaseContext)
    
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


  const login = () => {
    
    signIn(email,password).then(() => {
      console.log("done");
    }).catch((e) => {
      console.log("error",e);
    })
  }

  return (
    <>
    <div className={styles.register_container}>
        
        <h1>Welcome</h1>
        <div className={styles.inputs}>

        <label>Email</label>
        <input 
        type="email"
         placeholder='Email'
         onChange={(e) => setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" 
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className={styles.inputs_paragraf}>
        <p >Forgot Password ?</p>
        </div>

        <button className={styles.register_button}>LOGIN</button>
        <p>or</p>
        
    

        {/*FACEBOOK GOOGLE VB GİRİS BUTONLARI */}
        <div className={styles.social_login_container}>
          <p>Register Using social networks</p>
          <div className={styles.social_login_buttons}>
         <button><FacebookFilled  /></button> 
         <button><GithubOutlined  /> </button> 
         <button><GooglePlusOutlined  /> </button> 
          </div>
      </div>
    </div>
   </>
  )
}

export default Login
