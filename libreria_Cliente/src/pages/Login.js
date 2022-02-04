import { useState, useContext } from "react";
import { LogContext } from "../Context/Context";
import LoginCliente from "../component/LoginCliente"
import Articulos from "../pages/Articulos"


const Login = () => {
    const [estadoModal, cambiarEstadoModal] = useState(true)
    const { loggedIn, setLoggedIn } = useContext(LogContext)

    return (
        <>
            {loggedIn ? <Articulos /> : <LoginCliente
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            />}

        </>
    )
}

export default Login