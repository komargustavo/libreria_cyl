import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useParams, generatePath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";


const EditarClientes = ({ estado, cambiarEstado }) => {
    const [clientes, setClientes] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const ObtenerCliente = async () => {
            try {
                const respuesta = await axios.put(`http://localhost:3001/clientes/id/${id}`)
                setClientes(respuesta.data)
            } catch (error) {
                console.log(error)
            }
        }
        ObtenerCliente()
    }, [clientes])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nombre: clientes.nombre,
            direccion: clientes.direccion,
            email: clientes.email,
            telefono: clientes.telefono,
            password: clientes.password,
        },
        validationSchema: Yup.object({
            nombre: Yup.string().min(3, 'El nombre debe tener al menos tres caracteres').required('El nombre es requerido'),
            direccion: Yup.string().min(3, 'Ingrese una dirección válida').required('La dirección es requerida'),
            email: Yup.string('Ingrese su E-mail').email('Ingrese un E-mail válido').required('El E-mail es requerido'),
            telefono: Yup.number('Ingrese solamente valores numéricos').required('Ingrese su Número de teléfono para que nos podamos comunicar'),
            password: Yup.string('Ingresa tu contraseña').min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const respuesta = await axios.put(`http://localhost:3001/clientes/id/${id}`, values).data
                console.log(respuesta)
                resetForm();
            } catch (error) {
                console.log(error);
            }


        },
    }
    );




    return (
        <>
            <>
                <div className=" xl:container bg-white my-20 px-5 py-10 rounded-md shadow-2xl mx-auto">
                    <div className=" container mx-auto flex justify-between items-center text-red-800 border-b-2 pb-4">
                        <h2 className=" text-center my-8">Actualizar datos del cliente</h2>
                        <Link to="/ListaClientes" onClick={() => cambiarEstado(!estado)} >
                            <FontAwesomeIcon icon={faTimesCircle} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                        </Link>
                    </div>
                    <form onSubmit={formik.handleSubmit} action="/id/:id" method="PUT" className="mt-5">
                        {/* NOMBRE Y APELLIDO CLIENTE */}
                        <div className="mb-4">
                            <label
                                className=" text-4xl text-blue-900"
                                htmlFor="nombre"
                            >Nombre:</label>
                            <input className=" uppercase mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                id="nombre"
                                nombre="nombre"
                                type="text"
                                placeholder="Nombre y apellido del cliente"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.nombre && Boolean(formik.errors.nombre) ? (<div className=" text-red-600"> {formik.errors.nombre}</div>) : null}
                        </div>
                        {/* DIRECCION CLIENTE */}
                        <div className="mb-4">
                            <label
                                className=" text-4xl text-blue-900"
                                htmlFor="direccion"
                            >Direccion:</label>
                            <input className=" uppercase mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                id="direccion"
                                nombre="direccion"
                                type="text"
                                placeholder="Dirección del cliente"
                                value={formik.values.direccion}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.direccion && Boolean(formik.errors.direccion) ? (<div className=" text-red-600"> {formik.errors.direccion}</div>) : null}
                        </div>
                        {/* EMAIL CLIENTE */}
                        <div className="mb-4">
                            <label
                                className=" text-4xl text-blue-900"
                                htmlFor="email"
                            >E-mail:</label>
                            <input className=" uppercase mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                id="email"
                                nombre="email"
                                type="email"
                                placeholder="E-mail del cliente"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && Boolean(formik.errors.email) ? (<div className=" text-red-600"> {formik.errors.email}</div>) : null}
                        </div>

                        {/* TELEFONO CLIENTE */}
                        <div className="mb-4">
                            <label
                                className=" text-4xl text-blue-900"
                                htmlFor="telefono"
                            >Teléfono:</label>
                            <input className=" uppercase mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                id="telefono"
                                nombre="telefono"
                                type="tel"
                                placeholder="Teléfono del cliente"
                                value={formik.values.telefono}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.telefono && Boolean(formik.errors.telefono) ? (<div className=" text-red-600"> {formik.errors.telefono}</div>) : null}
                        </div>
                        {/* CONTRASEÑA CLIENTE */}
                        {/* <div className="mb-4">
                            <label
                                className=" text-4xl text-blue-900"
                                htmlFor="password"
                            >Contraseña:</label>
                            <input className=" uppercase mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                id="password"
                                nombre="password"
                                type="password"
                                placeholder="Contraseña del cliente"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password && Boolean(formik.errors.password) ? (<div className=" text-red-600"> {formik.errors.password}</div>) : null}
                        </div> */}

                        <div className="flex justify-around">

                            <input className=" bg-blue-800 text-white p-4 uppercase  block  mt-10 rounded-lg cursor-pointer"
                                type="submit"
                                value="Actualizar Cliente"
                            />
                        </div>
                    </form>
                </div>
            </>

        </>
    )
}

export default EditarClientes