import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <div>
            <h1>{props.gretting}</h1>
            {shoes?.map(item => (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Link to={`/item/${item.id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
