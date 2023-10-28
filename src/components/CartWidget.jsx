import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
        <IconButton size="large" aria-label="show 4 new items" color="info">
            <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}