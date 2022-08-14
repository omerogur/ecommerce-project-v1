import React, { useContext } from 'react'
import { baseService } from "../../network/service/baseService"
import { useEffect, useState } from 'react'
import style from "./product.module.css"
import { useCart } from '../../context/CardContext'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../../context/FirebaseContext'

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const {addToCart} = useCart()
    const navigate = useNavigate()
    const {user} = useContext(FirebaseContext)  
    console.log(user);
 
    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {

        try {
            const data = await baseService.get(`/products`)
            setProducts(data)
            console.log("update");
        } catch (error) {
            console.log("Categories list error", error);
        }
    }
  
     const goDetail = (id) => {
        navigate(`/products/${id}`)
     }

    return (
        <>

     
     <div className={style.flexContainer}>
            {products.map((item, key) => (
                <div key={key} className='col-md-3 mb-5 justify-content-center' onClick={() => goDetail(item.id)}>
                    
                    <div  className="card h-100 text-center p-4" >
                        <img src={item.image} className="card-img-top"  alt="..."  height="150px" />
                        <div className="card-body">
                            <h5 className="card-title mb-3">{item.title}</h5>
                            <p className="card-text lead fw-bold">${item.price}</p>
                            <button onClick={() => addToCart(item)} className="btn btn-outline-dark">Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))
            
        }
        </div>


        </>
    )
}

export default ProductPage
