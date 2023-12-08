import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartShoes, setCartShoes] = useState([]);

    const clear = () => {
        setCartShoes([])
    }

    const add = (item) => {
        setCartShoes(prev => { return [...prev, item]})
    }

    return(
    <CartContext.Provider value={{cartShoes, clear, add}}>{children}</CartContext.Provider>
    )
}