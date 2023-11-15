import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';

export const ItemDetailContainer = () => {

    const [data, setData] = useState()
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://654abc445b38a59f28ee2f3f.mockapi.io/shoes/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[id])

    return(
        <div>
                <Card style={{ width: '18rem' }} key={data?.id}>
                    <Card.Img variant="top" src={data?.photo} />
                    <Card.Body>
                        <Card.Title>{data?.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    )
}