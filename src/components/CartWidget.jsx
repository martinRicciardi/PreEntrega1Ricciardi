import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { cartShoes } = useContext(CartContext)
    const cartQuantity = cartShoes.reduce((accum, item) => accum + item.quantity, 0)

    return (
        <Link to={'/cart'}>
            <IconButton size="large" aria-label="show 4 new items" color="info">
                <Badge badgeContent={cartQuantity} color="error">
                    <ShoppingCartIcon sx={{color: 'inherit'}}/>
                </Badge>
            </IconButton>
        </Link>
    )
}