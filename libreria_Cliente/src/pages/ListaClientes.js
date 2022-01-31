import { useState, useEffect } from "react"
import axios from 'axios'
import Clientes from '../component/Clientes'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";


const ListaClientes = ({ estado, cambiarEstado }) => {
    const [cliente, setCliente] = useState([])

    useEffect(() => {
        const ObtenerClientes = async () => {
            try {
                const respuesta = await axios.get('http://localhost:3001/clientes/all')
                setCliente(respuesta.data)
            } catch (error) {
                console.log(error)
            }
        }
        ObtenerClientes()
    }, [])
    return (
        <>
            <div className=" bg-white container mx-auto p-6 mt-10 rounded-2xl">
                <div className="flex justify-between ">
                <h2 className=" font-black text-4xl text-blue-900">Administrar Clientes</h2>
                <Link to="/" onClick={() => cambiarEstado(!estado)} >
                            <FontAwesomeIcon icon={faTimesCircle} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                        </Link>
                        </div>
                <table className=" w-full mt-5 table-auto shadow bg-neutral-200 ">
                    <thead className=" bg-blue-800 text-white uppercase ">
                        <tr>
                            <th className="p-2 ">Nombre</th>
                            <th className="p-2 ">Contacto</th>
                            <th className="p-2 ">Dirección</th>
                            <th className="p-2 ">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map(cliente=>(
                            <Clientes
                            key={cliente.id}
                            cliente={cliente}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaClientes