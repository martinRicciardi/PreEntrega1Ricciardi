import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import { getFirestore, getDoc, doc } from "firebase/firestore"

export const ItemDetailContainer = () => {

    const [data, setData] = useState()
    const { id } = useParams()

    const { add } = useContext(CartContext)

    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            if(snapshot.size === 0) console.log("no results");
            setData(
                {id: snapshot.id, ...snapshot.data()}
            )
        })
    },[id])

    return(
        <Card style={{ width: '18rem' }} key={data?.id}>
            <Card.Img variant="top" src={data?.photo} />
            <Card.Body>
                <Card.Title>{data?.name}</Card.Title>
                <Card.Text>{data?.price}</Card.Text>
                <Button size="large" onClick={() => add(data)} variant="contained" color="primary">Add Cart</Button>
            </Card.Body>
        </Card>
    )
}