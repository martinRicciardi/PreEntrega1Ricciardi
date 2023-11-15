import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';

export const ItemDetailContainer = () => {

    const [data, setData] = useState()
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await fetch(`https://654abc445b38a59f28ee2f3f.mockapi.io/shoes/${id}`)
                const data = await res.json()
                setData(data)
            }
            catch (error){
                console.log(error);
            }
        }
        getData()
    },[id])

    return(
        <div>
                <Card style={{ width: '18rem' }} key={data?.id}>
                    <Card.Img variant="top" src={data?.photo} />
                    <Card.Body>
                        <Card.Title>{data?.name}</Card.Title>
                        <Card.Text>{data?.price}</Card.Text>
                    </Card.Body>
                </Card>
        </div>
    )
}