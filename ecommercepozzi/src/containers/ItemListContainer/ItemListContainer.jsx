import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ItemCount } from "../../componentes/itemCount/itemCount"
import { gFetch } from "../../helpers/gfetch"





export const ItemListContainer = ( { Greeting } ) => {

    const [ products, setProducts ] = useState( [] )
    const [ loading, setLoading ] = useState( true )
    const {categoriaId} = useParams()

    useEffect ( () => {
        if(categoriaId){
            gFetch ()
        .then ( resp => setProducts ( resp.filter(product=>product.categoria===categoriaId) ) )
        .catch ( err => console.log ( err ) )
        .finally ( () => setLoading ( false ) )
        }
        else{
        gFetch ()
        .then ( resp => setProducts ( resp ) )
        .catch ( err => console.log ( err ) )
        .finally ( () => setLoading ( false ) )
        }
    }, [categoriaId])

    console.log('productos:', products)

    return(
        <>        
            <h1> { Greeting } </h1>
            { loading ?
                <h2>Cargando productos</h2>
                :
                products.map (product =><div key={product.id}>    
                                        <div>
                                            { `${product.name} - ${product.categoria}` }
                                        </div>
                                        
                                        <div>
                                            <img src={product.foto} alt="" />
                                            {product.price}
                                        </div>
                                        <Link to={`/detail/${product.id}`}>
                                        <div>
                                            <button>
                                                DETALLE DEL PRODUCTO
                                            </button>
                                        </div>
                                            
                                        </Link>                                        
                                    </div>
                        )}
            
            <ItemCount/>

        </>
    )
}


