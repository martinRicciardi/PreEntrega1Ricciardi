import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

export const EmptyCart = () => {
    return (
        <Container sx={{ height:'83vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant='h2'>Empty cart! Add your favourite sneaker</Typography>
            <Link to={`/`}>
                <Button variant='contained' size='large'>Discover</Button>
            </Link>
        </Container>
    )
}