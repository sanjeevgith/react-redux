import React from 'react'

export default function Home(props) {
  return (
    <div>
           
    <h1>Home Component</h1>
    <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280"/>
        </div>
        <div className="text-wrapper item">
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button 
            onClick={()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}>
                Add To Cart</button>
        </div>
    </div>
</div>
  )
}
