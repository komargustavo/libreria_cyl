import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"

const Clientes = ({ cliente }) => {
    const navigate = useNavigate()

    const { _id, nombre, telefono, email, direccion, password } = cliente
    const id = toString(_id)

    const eliminarCilente= async(id)=>{
        const confirmar = window.confirm(`Deseas eliminar este cliente ?`)
        if (confirmar) {
            try {
                console.log(id)
                const respuesta = await axios.delete(`http://localhost:3001/clientes/delete/${id}`)
                window.location.reload(true)
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <tr className=" my-10 border hover:bg-gray-300 ">
            <td className=" p-6 uppercase">{nombre}</td>
            <td className=" uppercase ">
                <p className="text-2xl"><span className="text-gray-600  text-2xl font-black">E-mail: </span>{email}</p>
                <p className="text-2xl"><span className="text-gray-600  text-2xl font-black">Tel: </span>{telefono}</p>
            </td>
            <td className=" text-center uppercase">{direccion}</td>
            <td className=" mt-4 p-4 content-center">
                <button type="button" className="bg-blue-800 text-white p-2 uppercase w-full  block rounded-lg cursor-pointer"
                    onClick={() => { navigate(`/${_id}`) }}
                >Editar</button>

                <button type="button" className="bg-blue-800 text-white p-2 uppercase w-full block rounded-lg cursor-pointer mt-4"
                    onClick={async (id) => {eliminarCilente(id)
                    }}>Eliminar</button>
            </td>

        </tr>

    )
}



export default Clientes