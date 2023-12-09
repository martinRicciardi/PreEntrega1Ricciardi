import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartShoes, setCartShoes] = useState([]);

    const clear = () => {
        setCartShoes([])
    }

    const addItem = (item, quantity) => {
        const isInCart = cartShoes.some((i) => i.id === item.id)
        if(isInCart){
            const update = cartShoes.map(i => {
                if(i.id === item.id){
                    return {
                        ...i, quantity: i.quantity + quantity
                    }
                } else {
                    return i;
                }
            })
            setCartShoes(update)
        }else{
            setCartShoes(prev => { return [...prev, {...item, quantity}]})
        }
    };

    const removeItem = (id) => {
        const newCart = cartShoes.filter((item) => item.id !== id)
        setCartShoes(newCart)
    }

    return(
    <CartContext.Provider value={{cartShoes, clear, addItem, removeItem}}>{children}</CartContext.Provider>
    )
} 