import { Button } from '@mui/material';
import { CartContext } from "../context/CartContext";
import { useContext, useState } from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Alert from '@mui/joy/Alert';

export const ItemCount = ({ data, initial, stock }) => {

    const [count, setCount] = useState(initial)
    const { addItem } = useContext(CartContext)

    const handleDecrease = () => {
        if (count > initial) setCount((prev) => prev - 1)
    }

    const handleIncrease = () => {
        if (stock > count) setCount((prev) => prev + 1)
    }

    return (
        <Box sx={{
            display : 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <ArrowDropDownIcon onClick={handleDecrease}></ArrowDropDownIcon>
                <Typography variant='h5'>{count}</Typography>
                <ArrowDropUpIcon onClick={handleIncrease}></ArrowDropUpIcon>
            </Box>
            <Button sx={{ backgroundColor: '#fff', boxShadow: 3, color: 'black'}} size="large" onClick={() => {addItem(data, count); setCount(initial); return <Alert>This is a basic Alert.</Alert>;}} variant="contained" color="primary">Add Cart</Button>
        </Box>
    )
}