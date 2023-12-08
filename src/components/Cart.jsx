import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Cart = () => {
    const {cartShoes} = useContext(CartContext)

    return (
        console.log(cartShoes)
    )
}