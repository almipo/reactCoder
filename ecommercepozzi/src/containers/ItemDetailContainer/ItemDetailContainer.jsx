import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { gFetch } from "../../helpers/gFetch"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productoId} = useParams()
    //console.log(productoId)

    useEffect(()=>{
        
        gFetch(productoId)
            .then(resp=>setProduct(resp))
            .catch (err => console.log(err))

    }, [])

    return (
        <ItemDetail
            product={product}
        />
    )
}
export default ItemDetailContainer