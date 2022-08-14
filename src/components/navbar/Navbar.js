import React from 'react'
import { ShoppingCartOutlined  } from '@ant-design/icons'
import {  Badge } from 'antd';
import {Link,NavLink} from 'react-router-dom'
import "../../App.css"
import { useCart } from '../../context/CardContext';
const Navbar = () => {

 const {cart} = useCart()

  return (
    <div>
           <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">YOUR STORE</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"} className="nav-link" >Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/singleCart"} className="nav-link" >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>Link</NavLink>
              </li>
              
            </ul>
            
            <div className='buttons'>
             <Link to="/login">   <div  className='btn btn-outline-dark'><i className='fa fa-sign-in me-1'></i>LOGIN</div></Link>
             <Link to="/register">  <div  className='btn btn-outline-dark ms-2'><i className='fa fa-user-plus me-1'></i>Register</div></Link> 
              <Link to= {"/cart"}>  <div  className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart ({cart.length})</div></Link>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar