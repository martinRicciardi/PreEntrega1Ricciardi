import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"

import Card from 'react-bootstrap/Card';

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

    if(cartShoes.length === 0) return <div>carrito vacio querido</div>

    return (
        <div>
            {cartShoes.map((item) => (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Card.Text>{item.quantity}</Card.Text>
                        <button onClick={() => removeItem(item.id)}>X</button>
                    </Card.Body>
                </Card>
            ))}
        <div>
            {totalPrice}
        </div>
            <button onClick={clear}>Clean cart</button>
            <form>
                <input type="email" required placeholder="Email" value={email} onChange={changeEmail}/>
                <input type="text" required  placeholder="Name" value={name} onChange={changeName}/>
                <input type="text" required  placeholder="Phone" value={phone} onChange={changePhone}/>
                <button type="button" onClick={handleSend}>Buy</button>
            </form>
        </div>
    )
}