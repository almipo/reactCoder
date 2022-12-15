import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './componentes/Navbar/Navbar'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import CartContainer from './containers/CartContainer/CartContainer'


function App () {
  let Greeting = ' home container '
  return (
      
        <BrowserRouter>
              <Navbar/>                        
            <Routes>
              <Route path='/' element = {<ItemListContainer Greeting = { Greeting }/>}/>
              <Route path='/categoria/:categoriaId' element = {<ItemListContainer />}/>
              <Route path='/detail/:productoId' element = {<ItemDetailContainer/>}/>
              <Route path='/cart' element = {<CartContainer/>}/>  

              <Route path='*' element = {<Navigate to ='/'/>} /></Routes>         
        </BrowserRouter>
      
  )
}


export default App
