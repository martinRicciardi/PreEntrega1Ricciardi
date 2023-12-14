import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
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
                    <LocalMallOutlinedIcon fontSize='medium' sx={{color: 'black'}}/>
                </Badge>
            </IconButton>
        </Link>
    )
}