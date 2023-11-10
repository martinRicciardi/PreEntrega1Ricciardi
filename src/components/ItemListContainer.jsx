import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CardContainer } from "./CardContainer";

export const ItemListContainer = (props) => {

    const [shoes, setShoes] = useState()
    const {categoryid} = useParams()

useEffect(() => {
    fetch('https://654abc445b38a59f28ee2f3f.mockapi.io/shoes')
    .then(res => res.json())
    .then(data => setShoes(data))
},[])

const searchShoes = shoes?.filter(item => item.category === categoryid)

return(
        <div>
            <h1>{props.gretting}</h1>
            {categoryid ? 
            searchShoes?.map(item => <CardContainer data={item}/>)
            :
            shoes?.map(item => <CardContainer data={item}/>)}
        </div>
    )
}

