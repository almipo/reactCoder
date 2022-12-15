


let productos = [
    {id:'1', name:'producto 1', categoria:'teclado', stock:'', price:'1000', foto: src='https://drive.google.com/file/d/1AIVrqj5tYETZuBA7RChB33mI-8p3o1qk/view?usp=share_link' },
    {id:'2', name:'producto 2', categoria:'teclado', stock:'', price:'1000', foto: src='https://drive.google.com/file/d/1tGmBsomBF_lVnsJIxCKXZdXM7Bad97o6/view?usp=sharing' },
    {id:'3', name:'producto 3', categoria:'teclado', stock:'', price:'1000', foto: src='https://drive.google.com/file/d/1igI9JssAx4Fi4klTzorI6qplF-J_qtvE/view?usp=share_link' },
    {id:'4', name:'producto 4', categoria:'mouse', stock:'', price:'1000', foto: src='https://drive.google.com/file/d/1IL_OOASnd8JyVAJgQNz2BVI4htdw1pwT/view?usp=share_link' },
    {id:'5', name:'producto 5', categoria:'mouse', stock:'', price:'1000', foto: src='https://drive.google.com/file/d/1HIEpW4aDr7swBkTcBtUhmzxosUbKMMzu/view?usp=share_link' }
]

export const gFetch = (id) => {
    return new Promise( ( aceptado, rechazado)=> {
        // acciones 
        setTimeout(()=>{
            aceptado(id  ? productos.find(prod => prod.id === id) : productos) //{resultado: 6}
        }, 1000 )
        // rechazado( '404 todo mal' )
    } )
}
