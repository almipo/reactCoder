import { Link, NavLink } from "react-router-dom"
import { Brand } from "../Brand/Brad"
import { Cardwidget } from "../Cardwidget/Cardwidget"
import './Navbar.css'



export const Navbar = () => {
    return (
        <nav>
            <div className="Brand">
                <Brand/>
            </div>
            <div className="Secciones">
                <NavLink to='/categoria/teclado'>
                    <p>TECLADOS</p>
                </NavLink>
                <NavLink to='/categoria/mouse'>
                <p>MOUSE</p>
                </NavLink>
                <p>seccion 3</p>
                <p>seccion 4</p>
                <p>seccion 5</p>           
            </div>
            <div className="Carrito">
                <Cardwidget/>
            </div>
        </nav>
    )
}