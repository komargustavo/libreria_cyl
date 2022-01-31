import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios'
import { useFormik } from "formik"
import * as Yup from "yup"

const Contacto = ({ estado, cambiarEstado }) => {
    const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            texto: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string().min(3, 'El nombre debe tener al menos tres caracteres').required('El nombre es requerido'),
            email: Yup.string('Ingrese su E-mail').email('Ingrese un E-mail válido').required('El E-mail es requerido'),
            texto: Yup.string().min(6, 'El texto debe tener al menos 20 caracteres').required('Ingrese el texto a enviar')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:3001/clientes/correo', values)
                // resetForm()
            } catch (error) {
                console.log(error);
            }
            alert(JSON.stringify(values, null, 2));
        },

    });

    return (

        <div className=" xl:container bg-white my-20 px-5 py-10 rounded-md shadow-2xl mx-auto">
            <div className=" container mx-auto flex justify-between items-center text-red-800 border-b-2 pb-4">
                <h4 className=" font-bold m-4  ">Enviar Correo</h4>
                <Link to="/" onClick={() => cambiarEstado(!estado)} >

                    <FontAwesomeIcon icon={faTimesCircle} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                </Link>
            </div>

            <form onSubmit={formik.handleSubmit} action="/correo" method="POST" className="mt-5">
                {/* NOMBRE Y APELLIDO CLIENTE */}
                <div className="mb-4">
                    <label
                        className=" text-4xl text-blue-900 uppercase"
                        htmlFor="nombre"
                    >Nombre:</label>
                    <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre y apellido del cliente"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.nombre && Boolean(formik.errors.nombre) ? (<div className=" text-red-600"> {formik.errors.nombre}</div>) : null}
                </div>
                {/* EMAIL CLIENTE */}
                <div className="mb-4">
                    <label
                        className=" text-4xl text-blue-900 uppercase"
                        htmlFor="email"
                    >E-mail:</label>
                    <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail del cliente"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && Boolean(formik.errors.email) ? (<div className=" text-red-600"> {formik.errors.email}</div>) : null}
                </div>
                {/* NOTAS CLIENTE */}
                <div className="mb-4">
                    <label
                        className=" text-4xl text-blue-900 uppercase"
                        htmlFor="notas"
                    >Notas:</label>
                    <input className="mt-2 block  text-2xl w-full h-40 p-3 bg-gray-100 rounded-lg"

                        as="textarea"
                        id="texto"
                        nombre="texto"
                        type="text"
                        placeholder="Notas del cliente"
                        value={formik.values.texto}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.texto && Boolean(formik.errors.texto) ? (<div className=" text-red-600"> {formik.errors.texto}</div>) : null}

                </div>
                <p className=" text-3xl text-center p-4">Envianos un E-mail junto con tu número telefónico para que podamos
                    comunicarnos con vos</p>
                <div className="flex justify-around">
                    <input className=" bg-blue-800 text-white p-4 uppercase  block  mt-10 rounded-lg cursor-pointer"
                        type="submit"
                        value="Enviar Correo"
                    />
                </div>
            </form>

        </div>
    )
}

export default Contacto

