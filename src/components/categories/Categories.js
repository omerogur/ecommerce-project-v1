import React from 'react'
import style from "./categories.module.css"
import CategoryItem from "./CategoryItem";
const Categories = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "SHIRT STYLE!",
            category:"men's clothing",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "LOUNGEWEAR ",
            category:"men's clothing",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "LIGHT JACKETS",
            category:"men's clothing",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "SHIRT STYLE!",
            category:"electronics",
        },
        {
            id: 5,
            img: "https://ktnimg2.mncdn.com/cms/2022/08/08/28b669cf-b889-4cd9-859e-2c28c09907a4.jpg",
            title: "SHIRT STYLE!",
            category:"jewelery",
        },
        {
            id: 5,
            img: "https://ktnimg2.mncdn.com/cms/2022/08/08/28b669cf-b889-4cd9-859e-2c28c09907a4.jpg",
            title: "SHIRT STYLE!",
            category:"women's clothing",
        },
        {
            id: 5,
            img: "https://ktnimg2.mncdn.com/cms/2022/08/08/28b669cf-b889-4cd9-859e-2c28c09907a4.jpg",
            title: "SHIRT STYLE!",
            category:"men's clothing",
        },
    ];

    return (
        <div className={style.container}>
            {
                data.map((item, key) => (
                    <CategoryItem key={key} data={item}  />
                ))
            }
        </div>
    )
}

export default Categories
