import { ItemCount } from "../ItemCount/ItemCount"



const ItemDetail = ({product}) => {

    return (
    <div>
        <div>
            <img src="{product.foto}" alt="imagen del producto" />
            <h2>{product.name}</h2>
            <h4>STOCK:{product.stock}</h4>
            <h5>CATEGORIA: {product.categoria}</h5>
            <hr />
            <h5>PRECIO:$ {product.price}</h5>
        </div>


        <ItemCount/>
    </div>
    )
}

export default ItemDetail