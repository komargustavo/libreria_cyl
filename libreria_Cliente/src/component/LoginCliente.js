import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { useState, useContext } from "react";
import { LogContext } from "../Context/Context";
import ListaClientes from "../pages/ListaClientes";


const LoginCliente = ({ estado, cambiarEstado }) => {
    const emailAdmin = process.env.REACT_APP_ADMIN_EMAIL
    const passAdmin = process.env.REACT_APP_ADMIN_PASS
    const [condicion, setCondicion] = useState(false)
    const { loggedIn, setLoggedIn } = useContext(LogContext)
    const formik = useFormik({


        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string('Ingrese su E-mail').email('Ingrese un E-mail válido').required('El E-mail es requerido'),
            password: Yup.string('Ingresa tu contraseña').min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
        }),
        onSubmit: async (values, { resetForm }) => {
            if (emailAdmin === values.email && passAdmin === values.password) {
                console.log('usuario logueado como administrador')
                setCondicion(true)
                cambiarEstado(false)
            } else {
                try {
                    const response = await axios.post('http://localhost:3001/clientes/login', values)
                    localStorage.setItem('autenticacion', response.data.token)
                    resetForm();


                } catch (error) {
                    window.alert('Usuario o Contraseña incorrecto')
                    console.log(error);
                }
                setLoggedIn((prevState) => !prevState)
            }


        },

    });


    return (
        <>
            {loggedIn === false && <app />}
            {condicion ? <ListaClientes /> : <>
                < div className=" w-screen h-screen fixed top-0 left-0 bg-yellow-200 flex items-center justify-center">
                    <div className=" w-4/12 h-auto relative bg-white rounded-md shadow-inherit p-5">
                        <div className=" container mx-auto flex justify-between items-center text-red-800 border-b-2 pb-4">
                            <h4 className=" font-bold m-4  ">Login</h4>
                            <Link to="/" onClick={() => cambiarEstado(!estado)} >

                                <FontAwesomeIcon icon={faTimesCircle} className=" text-5xl hover:text-blue-900 hover:scale-150 transition-transform" />
                            </Link>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="mt-5">
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
                                    placeholder="Ingrese su E-mail"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && Boolean(formik.errors.email) ? (<div className=" text-red-600"> {formik.errors.email}</div>) : null}

                            </div>
                            {/* CONTRASEÑA CLIENTE */}
                            <div className="mb-4">
                                <label
                                    className=" text-4xl text-blue-900 uppercase"
                                    htmlFor="password"
                                >Password:</label>
                                <input className="mt-2 block text-2xl w-full  p-3 bg-gray-100 rounded-lg"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Ingrese su Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.password && Boolean(formik.errors.password) ? (<div className=" text-red-600">{formik.errors.password}</div>) : null}

                            </div>
                            <div className="flex justify-around">

                                <input
                                    type="submit"
                                    value="Ingresar"
                                    className=" bg-blue-800 text-white p-4 uppercase  block  mt-10 rounded-lg cursor-pointer"
                                // ir a la página de inicio con el usuario logueado
                                />
                                <Link className="bg-blue-800 text-white p-4 uppercase  block  mt-10 rounded-lg cursor-pointer" to="/ClienteNuevo">Nuevo Cliente</Link>
                            </div>
                        </form>
                    </div>
                </div>

            </>}

        </>

    )

}

export default LoginCliente