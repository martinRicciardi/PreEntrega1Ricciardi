import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { EmptyCart } from "./EmptyCart";

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';

import '../styles/Cart.css'
import { Stack } from "@mui/joy";

export const Cart = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const {cartShoes, clear, removeItem} = useContext(CartContext);

    const totalPrice = cartShoes.reduce((accu, item) => accu + item.price * item.quantity, 0)

    const handleSend = () => {
        const order = {
        buyer: {
            name,
            phone,
            email,
        },
        shoes: cartShoes,
        total: totalPrice
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if(id) {
                alert("tu orden" + id + "ya esta papa")
            }
        })
        .finally(() => {
            setEmail("")
            setName("")
            setPhone("")
            clear()
        })
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }

    if(cartShoes.length === 0) return <EmptyCart/>

    return (
        <>
            <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',flexDirection: 'row'}}>
                {cartShoes.map((item) => (
                    <Card sx={{ 
                        m: 2,
                        width: 250, 
                        height: 500,
                        boxShadow:10,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }} key={item.id}>
                            <div className="img-container-cart">
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <CardContent sx={{p: 0, m: 1, height: 50}}>
                                <Typography variant="h6">{item.name}</Typography>
                            </CardContent>
                            <CardContent sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                p: 0,
                                pb: 0,
                            }}>
                                <Typography variant="h5">x{item.quantity}</Typography>
                                <Typography variant="h5">USD {item.quantity * item.price}</Typography>
                            </CardContent>
                                <Button color='error' variant="contained" onClick={() => removeItem(item.id)}>DELETE</Button>
                    </Card>
                ))}
            </Container>
            <Container sx={{ display: 'flex', flexDirection: 'row', height: '20vh', justifyContent: 'space-around', alignItems: 'center', }}>
                <Typography color='#2196f3' variant="h5">TOTAL PRICE: USD {totalPrice}</Typography>
                <Button variant="outlined" size='large' color="error" onClick={clear}>Clean cart</Button>
            </Container>
            <form onSubmit={(event) => {event.preventDefault(); handleSend()}}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', height: '20vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Input sx={{width: 300}} size="lg" type="email" placeholder="Email" value={email} onChange={changeEmail} required/>
                    <Input sx={{width: 300}} size="lg" type="text" placeholder="Name" value={name} onChange={changeName} required/>
                    <Input sx={{width: 300}} size="lg" type="text" placeholder="Phone" value={phone} onChange={changePhone} required/>
                    <Button sx={{m: 2}} type="submit" variant="outlined">Send order</Button>
                </Stack>
            </form>
        </>
    )
}
