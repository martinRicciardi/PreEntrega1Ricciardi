import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ItemDetailContainer } from "./ItemDetailContainer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemListContainer = (props) => {

    const [data, setData] = useState()
    const [shoes, setShoes] = useState()
    const {categoryid} = useParams()

useEffect(() => {
    fetch('https://654abc445b38a59f28ee2f3f.mockapi.io/shoes')
    .then(res => res.json())
    .then(data => setData(data))

    if (categoryid){
    setShoes(data?.filter(item => item.category === categoryid))}
    else {setShoes(data)}
},[categoryid, data])

return(
        <div>
            <h1>{props.gretting}</h1>
            {shoes?.map(item => (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Link to={`/item/${item.id}`}>
                            <Button variant="primary" id={(item.id)} onClick={() => <ItemDetailContainer prop={item}/>}>Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
        ))}
        </div>
    )
}

