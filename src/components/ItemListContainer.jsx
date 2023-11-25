import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';

export const ItemListContainer = (props) => {

    const [data, setData] = useState()
    const [shoes, setShoes] = useState()
    const {categoryid} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await fetch(`https://654abc445b38a59f28ee2f3f.mockapi.io/shoes`)
                const data = await res.json()
                setData(data)
            }
            catch (error){
                console.log(error);
            }
        }
        getData()
    },[])

    useEffect(() => {
        if (categoryid){
            setShoes(data?.filter(item => item.category === categoryid))}
            else {setShoes(data)}
    },[data, categoryid])

return(
        <>
            <h1>{props.gretting}</h1>
                <Container maxWidth='xl' sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}>
                    
                    {shoes?.map(item => (
                        <Card sx={{ 
                            m: 2,
                            width: 430, 
                            height: 600,
                            boxShadow:10,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} key={item.id}>
                            <Link to={`/item/${item.id}`}>
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image={item.photo}
                                    alt={item.name}
                                />
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
                                    <Link to={`/cart`}>
                                        <Button size="large" variant="contained" color="primary">Add Cart</Button>
                                    </Link>
                                </CardContent>
                        </Card>
                    ))}
                </Container>
        </>
    )
}
