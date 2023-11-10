import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardContainer = ({data}) => {
    return(
        <Card style={{ width: '18rem' }} key={data.id}>
            <Card.Img variant="top" src={data.photo} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" id={(data.id)} onClick={() => console.log(data.id)}>Details</Button>
            </Card.Body>
        </Card>
    )
}