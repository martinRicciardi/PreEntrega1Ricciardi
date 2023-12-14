import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

import Container from '@mui/material/Container';
import Skeleton from '@mui/joy/Skeleton';

import { getFirestore, getDoc, doc } from "firebase/firestore"

export const ItemDetailContainer = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            if(snapshot.size === 0) console.log("no results");
            setData(
                {id: snapshot.id, ...snapshot.data()}
            )
        })
        .finally(() => setLoading(false))
    },[id])

    return(
        <>
            <Container maxWidth='xl' sx={{
                height: { xs: '150vh', sm: '150vh', md: '92vh', lg: '92vh', xl: '92vh' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {loading ?
                <Skeleton animation='wave' sx={{ 
                    maxWidth: { xs: '90%', sm: '90%', md: '85%', lg: '75%', xl: '60%' }, 
                    height: { xs: 1200, sm: 1200, md: 700, lg: 700, xl: 700 },
                }}/> 
                : 
                <ItemDetail data={data}/>
            }
            </Container> 
        </>
    )
}