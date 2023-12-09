import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';

import { getFirestore, getDoc, doc } from "firebase/firestore"
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {

    const [data, setData] = useState()
    const { id } = useParams()

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
                <Card.Text>Stock: {data?.stock}</Card.Text>
                <ItemCount data={data} initial={1} stock={data?.stock}/>
            </Card.Body>
        </Card>
    )
}