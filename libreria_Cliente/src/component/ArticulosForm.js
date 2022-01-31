import { useState, useEffect } from "react"
import axios from 'axios'
import block from '../img/8.jpg'


const ArticulosForm = () => {
    const [datosTabla, setDatosTabla] = useState([])
    useEffect(() => {
        const ObtenerArticulos = async () => {
            try {
                const respuesta = await axios.get('http://localhost:3001/articulos/allArticulos',{headers:{authorization:localStorage.getItem('autenticacion')}})
                setDatosTabla(respuesta.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        ObtenerArticulos()
    }, [])


    return (
        <div className="container mx-auto mt-80" id="grilla" >
            {datosTabla.map(item =>
            
                <div  >
                    <div className=" border-2 border-solid" id="elemento">
                        <img className=" max-w-full" src={block} key={item.idarticulos}/>
                        <p className=" text-2xl uppercase mt-6" >{item.descripcionArticulos}</p>
                        <p className=" text-2xl uppercase mt-6">{`$ ${item.importePrecio}`}</p>
                        <button className=" bg-blue-800 text-base text-white p-4 uppercase m-8 rounded-lg cursor-pointer ">Agregar Carrito</button>
                    </div>
                </div>

            )}
        </div>
    )
}

export default ArticulosForm
