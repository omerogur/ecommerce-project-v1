import React from 'react'
import Raptor from '../utills/Raptor'
import Shard from '../utills/Shard'
import style from './categoryItem.module.css'


const CategoryItem = ({ data }) => {
    

    return (
    
            <div className={style.container}>
               <img src={data.img} className={style.img}/>
                    <div className={style.about}>
                        <h3>{data.title}</h3>
                        <Shard category={data.category}/>
                       
                    </div>
                    <hr/>
                </div>
        
       
    )
}

export default CategoryItem
