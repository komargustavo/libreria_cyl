import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";


const ClienteNuevoForm = ({ estado, cambiarEstado }) => {

    const formik = useFormik({
        initialValues: {
            nombre: "",
            direccion: "",
            email: "",
            telefono: "",
            password: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string().min(3, 'El nombre debe tener al menos tres caracteres'),
            direccion: Yup.string().min(3, 'Ingrese una dirección válida'),
            email: Yup.string('Ingrese su E-mail').email('Ingrese un E-mail válido').required('El E-mail es requerido'),
            telefono: Yup.number('Ingrese su Número de teléfono para que nos podamos comunicar, solamente valores numéricos'),
            password: Yup.string('Ingresa tu contraseña').min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:3001/clientes/nuevo', values)
                resetForm();
            } catch (error) {
                console.log(error);
            }
        },

    });


    return (
        <>
            <div className=" xl:container bg-white my-10 px-5 py-10 rounded-md shadow-2xl mx-auto">
                <div  className=" container mx-auto flex justify-between items-center text-red-800 border-b-2 pb-4">
                    <h2 className=" text-center my-8">Clientes nuevos</h2>
                    <Link to="/login" onClick={() => cambiarEstado(!estado)} >
                        <FontAwesomeIcon icon={faTimesCircle} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                    </Link>
                </div>
                <form onSubmit={formik.handleSubmit} action="/nuevo" method="POST" className="mt-5">
                    {/* NOMBRE Y APELLIDO CLIENTE */}
                    <div className="mb-4">
                        <label
                            className=" text-4xl text-blue-900 uppercase"
                            htmlFor="nombre"
                        >Nombre:</label>
                        <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
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
                            className=" text-4xl text-blue-900 uppercase"
                            htmlFor="direccion"
                        >Direccion:</label>
                        <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
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
                            className=" text-4xl text-blue-900 uppercase"
                            htmlFor="email"
                        >E-mail:</label>
                        <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
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
                            className=" text-4xl text-blue-900 uppercase"
                            htmlFor="telefono"
                        >Teléfono:</label>
                        <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
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
                    <div className="mb-4">
                        <label
                            className=" text-4xl text-blue-900 uppercase"
                            htmlFor="password"
                        >Contraseña:</label>
                        <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                            id="password"
                            nombre="password"
                            type="password"
                            placeholder="Contraseña del cliente"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && Boolean(formik.errors.password) ? (<div className=" text-red-600"> {formik.errors.password}</div>) : null}
                    </div>

                    <div className="flex justify-around">

                        <input className=" bg-blue-800 text-white p-4 uppercase  block  mt-10 rounded-lg cursor-pointer"
                            type="submit"
                            value="Registrar Cliente"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ClienteNuevoForm
