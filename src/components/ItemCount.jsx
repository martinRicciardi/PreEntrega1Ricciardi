import { Button } from '@mui/material';
import { CartContext } from "../context/CartContext";
import { useContext, useState } from 'react'


export const ItemQuantitySelector = ({ data, initial, stock }) => {

    const [count, setCount] = useState(initial)
    const { addItem } = useContext(CartContext)

    const handleDecrease = () => {
        if (count > initial) setCount((prev) => prev - 1)
    }

    const handleIncrease = () => {
        if (stock > count) setCount((prev) => prev + 1)
    }

    return (
        <>
            <div>{count}</div>
            <Button onClick={handleDecrease}>-</Button>
            <Button onClick={handleIncrease}>+</Button>
            <Button size="large" onClick={() => {addItem(data, count); setCount(initial)}} variant="contained" color="primary">Add Cart</Button>
        </>
    )
}