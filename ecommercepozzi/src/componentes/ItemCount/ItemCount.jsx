import { useState } from "react"




export const ItemCount = () => {
    const [contador, setearContador] = useState(0)

    const [booleano, setBooleano] = useState(true)

    const handleCount = () =>{
        setearContador(contador + 1) ;
    };
    const  handleDiscount= () => {
        setearContador (contador -1);
    };

    return (
            <center>
            <button 
            onClick={handleCount}
            >
                +
            </button>
            <label htmlFor="">{contador}</label>
            <button
            onClick={handleDiscount}
            >
                -
            </button>
            <br />
            <button
            //onClick = {}
            >
                AGREGAR AL CARRITO
            </button>
            
            </center>
    )
}