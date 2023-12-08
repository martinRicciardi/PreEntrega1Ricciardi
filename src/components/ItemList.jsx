import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import "../styles/ItemList.css"

export const ItemList = ({shoes}) => {
    return(
        <>
            {shoes?.map(item => (
                <Card sx={{ 
                    m: 2,
                    width: 400, 
                    height: 450,
                    boxShadow:10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }} key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <div className="img-container">
                                <img src={item.photo} alt={item.name} />
                            </div>
                        </Link>
                        <CardContent sx={{p: 0, ml: 2}}>
                            <Typography variant="h5" component="div">{item.name}</Typography>
                        </CardContent>
                        <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            p: 0,
                            pb: 0,
                        }}>
                            <Typography variant="h6" sx={{alignSelf: 'center'}}> USD {item.price}</Typography>
                        </CardContent>
                </Card>
            ))}
        </>
    )
}