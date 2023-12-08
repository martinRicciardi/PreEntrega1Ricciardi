import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

import Container from '@mui/material/Container';
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {

    const [shoes, setShoes] = useState()
    const {categoryid} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const refCollection = categoryid ? query(collection(db, "items"), where("category", "==", categoryid)) : collection(db, "items");

        getDocs(refCollection).then((snapshot) => {
            if(snapshot.size === 0) console.log("no results");
            setShoes(
                snapshot.docs.map((doc) => {return {id : doc.id, ...doc.data()}})
            )
        })
    },[categoryid])

return(
        <>
            <div className={props.banner}>
                <h1>{props.gretting}</h1>
            </div>
            <Container maxWidth='xl' sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                <ItemList shoes={shoes}/>
            </Container>
        </>
    )
}
