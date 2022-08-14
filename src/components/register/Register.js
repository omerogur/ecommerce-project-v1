import React, { useContext, useState } from 'react'
import FirebaseContext from '../../context/FirebaseContext'
import styles from "./register.module.css"
import banner  from "./design.png"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.js'
import {FacebookFilled,GithubOutlined,GooglePlusOutlined} from '@ant-design/icons';
const Register = () => {

  const { register } = useContext(FirebaseContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()


  return (
    <div className={styles.register_container}>
      {/* Banner */}
      <div className={styles.inner_container}>
      <div className={styles.banner_container}>
        <h2>Aldready Have an Account ? </h2>
        <p>Sign in and discover a great amonut of new opportunities</p>
        <button className={`${styles.btn} ${styles.login_btn}`} onClick={(e) => {
          e.preventDefault()
            navigate("auth/login")
        }}>Login</button>

      </div>

      {/*Form*/}
      <form>
      <h2>Register to Your Account</h2>
        {/*FACEBOOK GOOGLE VB GİRİS BUTONLARI */}
        <div className={styles.social_login_container}>
          <p>Register Using social networks</p>
          <div className={styles.social_login_buttons}>
          <FacebookFilled /> 
          <GithubOutlined />
          <GooglePlusOutlined/>
          </div>
        </div>
        <div style={styles.form_control}>
          <input type="email" placeholder='email giriniz'
           onChange={(e) => setEmail(e.target.value)}
           value={email} />
        </div>
        <div style={styles.form_control}>
          <input type="password" placeholder='password giriniz' 
          value={password}
           onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className={`${styles.btn} ${styles.register_btn}`} onClick={(e) =>{ 
         e.preventDefault() 
         register(email,password)
         setEmail("")
         setPassword("")
         }}>Register</button>
      </form>
      </div>
    </div>
  )
}

export default Register
