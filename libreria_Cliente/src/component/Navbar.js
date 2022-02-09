import { Link } from "react-router-dom"
import { useContext } from "react";
import { LogContext } from "../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(LogContext)

    return (
        <>
            < div className=" bg-orange-300 top-0 left-0 right-0 z-auto shadow-2xl">
                <div className=" container  mx-auto flex justify-between center py-5 space-x-10">
                    <Link to="/">
                        <h2 className=" font-sans text-4xl font-bold md:font-normal md:text-6xl text-lowercase hover:text-blue-900 hover:scale-150 transition-transform">Librería
                            <span className=" font-black">C&L</span>
                        </h2>
                    </Link>
                    <nav className="rounded uppercase text-center  text-3xl mt-2 ">
                        <Link className="hover:bg-orange-500 hover:text-white hover:rounded-lg text-w md:inline block p-4" to="/nosotros">Nosotros</Link>
                        <Link className="hover:bg-orange-500 hover:text-white hover:rounded-lg text-w md:inline block p-4" to="/servicios">Servicios</Link>
                        <Link className="hover:bg-orange-500 hover:text-white hover:rounded-lg text-w md:inline block p-4" to="/articulos">articulos</Link>
                        <Link className="hover:bg-orange-500 hover:text-white hover:rounded-lg text-w md:inline block p-4" to="/contacto">Correo</Link>
                        {loggedIn ? <Link onClick={()=>{setLoggedIn((prevState)=>!prevState)
                        localStorage.clear()}} className="bg-orange-500 text-white rounded-lg p-4" to="/">Logout</Link> : <Link className="bg-orange-500 text-white rounded-lg p-4" to="/login">Login</Link>}
                    </nav>
                    <div className="carrito">
                        <div id="total-productos"></div><Link to="/articulos" id="img-carrito">
                            <FontAwesomeIcon icon={faCartArrowDown} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div >
            {loggedIn ? <p className=" text-3xl font-bold m-4 uppercase text-right">Bienvenido</p> : <p className=" text-3xl font-bold m-4 uppercase text-right">Para hacer compras debe realizar el Login a la página</p>}
        </>
    )
}


export default Navbar