import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { gFetch } from "../../helpers/gfetch"



const ItemDetailContainer = () => {
    const {productoId} = useParams()
    console.log(productoId)
    return (
        <ItemDetail/>
    )
}
export default ItemDetailContainer