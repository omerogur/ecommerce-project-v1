import { createContext, useContext, useState } from "react";


const  Context = createContext(null)

export const useCart = () =>  useContext(Context)

const CardProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addToCart = (item) => {
        const {id,title,price,description,category,image,rating} = item
        let obj = {
         id,title,price,description,category,image,rating,quantity:1,totalPrice:price
        }
       let findObj = cart.find(x => x.id==item.id)
        console.log(findObj);
        if(!findObj){
         setCart(prev => [...prev,obj])
        }else{
         findObj.quantity +=1
         findObj.totalPrice =(findObj.quantity*findObj.price) 
         setCart([...cart])
        }
        console.log(cart);
     }

     

    const values = {cart,setCart,addToCart}



    return <Context.Provider value={values}>{children}</Context.Provider>
}

export default CardProvider