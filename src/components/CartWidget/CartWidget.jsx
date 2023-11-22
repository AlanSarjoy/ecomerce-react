import cart from "./assets/cart.jpg"
import "./CartWidget.css"

const CartWidget = () => {
    return(

        <div className="cart">
            <span className="span-cart">0</span>
            <img src={cart} alt="carrito"/>
        </div>
   
    )
}

export default CartWidget ;
