import LoginCliente from "../component/LoginCliente"
import { useState } from "react"


const Login = () => {
    const [estadoModal, cambiarEstadoModal] = useState(true)

    return (
        <>
            <LoginCliente
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            />
        </>
    )
}

export default Login