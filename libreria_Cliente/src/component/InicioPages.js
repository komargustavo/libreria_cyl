import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import lapiz from '../img/lapiz.jpg'
import laser from "../img/colorlaser.jpg"
import plastificado from "../img/plastificado-.jpg"
import sellos from "../img/sellos.jpg"
import anillados from "../img/anillados.jpg"



const InicioPages = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
    
        <div className=' mt-40 border-solid'>
        {/* NOSOTROS */}
            <div className="mx-auto py-5 xl:container my-4 section " data-aos='zoom-in'>
                <h1 className=" text-5xl md:text-7xl p-4 bg-orange-600 text-center">Nosotros</h1>
                <div className=" p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-full bg-orange-100">
                    <div className=" mt-10 md:flex">
                        <img className="w-1/8 " src={lapiz} alt="lapiz" />
                        <div className=" mx-5 md:w-7/8">
                            <h3 className=" my-1"><b>LIBRERIA C&L:</b></h3>
                            <h4 className=" my-2"><b>15 años de experiencia</b></h4>

                            <p className=" text-3xl md:text-4xl ">
                                Somos una Pyme familiar del rubro librería y papelería comercial, ubicada en Microcentro de la ciudad Corrientes, que desde hace más de 15 años se especializa en brindar servicio a empresas privadas, clínicas y al público en general.
                                Nuestro local cuenta con un ámplio stock, e incorporamos en nuestro sitio web la opción de Tienda Online para ofrecer a nuestros clientes una experiencia de compra ágil, cómoda y autónoma, podrá realizar sus compras
                                o gestiones desde cualquier dispositivo, ya sea un ordenador, laptop, Smartphone o Tablet.   Las compras pueden ser enviadas a domicilio y/o retiradas del local comercial.<br /> Algunos de los <Link to="/servicios">servicios que brindamos</Link>:
                                <ul>
                                    <li> - Librería y papelería Comercial</li>
                                    <li> - Sellos de goma</li>
                                    <li> - Impresiones en negro y color</li>
                                    <li> - Fotocopias</li>
                                    <li> - Bajadas e impresión de archivo</li>
                                    <li> - Escaneo A3/A4</li>
                                    <li> - Anillados</li>
                                    <li> - Plastificados</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SERVICIOS */}
            <div className="mx-auto py-5 xl:container my-4 section">
                <h1 className=" mb-16 text-5xl md:text-7xl p-4 bg-orange-600 text-center">Servicios</h1>
                <div className="flex flex-wrap place-content-center">
                    {/* IMPRESIONES LASER */}
                    <div className="bg-orange-100 p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-left'>
                        <img className="w-1/3 shadow-2xl mb-10" src={laser} alt="Impresion Laser" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">Impresiones color </h4>
                            <p className=" m-5 ml-10 md:text-3xl">Bajamos e imprimimos tus trabajos en calidad Laser ó Jet Color:
                                <ul>
                                    <li> - Impresiones B/N - Color A4/Oficio/A3</li>
                                    <li> - Impresiones A4/A3 sobre papel fotográfico</li>
                                    <li> - Impresiones sobre papel transfer A4</li>
                                    <li> - Impresiones etiqueta autoadhesiva A4/Oficio</li>
                                    <li> - Impresiones filmina A4/Oficio</li>
                                </ul>

                                <b className=" uppercase">"Envíanos tus trabajos via E-mail y/o Whatsapp"</b>
                            </p>

                        </div>
                    </div>

                    {/* PLASTIFICADO */}
                    <div className="bg-orange-100 p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-right'>
                        <img className="w-1/3 p-4 mb-10" src={plastificado} alt="Plastificados" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">plastificados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center">Plastificados en frío y en caliente, en distintos tamaños, de excelente calidad.</p>
                        </div>
                    </div>

                    {/* SELLOS */}
                    <div className="bg-orange-100 p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-left'>
                        <img className="w-1/3 shadow-2xl mb-10" src={sellos} alt="Sellos" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">sellos personalizados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center">Contamos con una variada gama de sellos, <b>perilla, pocket,
                                automáticos, fechadores, numeradores</b>. Podes elegir entre distintos tipos de tipografías de
                                letras e insertar imágenes.
                            </p>
                        </div>
                    </div>

                    {/* ANILLADOS */}
                    <div className="bg-orange-100 p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-right'>
                        <img className="w-1/3 shadow-2xl mb-10 " src={anillados} alt="Anillados" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">anillados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center"><b>Organizá tus apuntes y textos !!!</b>. Te ofrecemos los mejores
                                anillados acordes a tus trabajos y tus necesidades, con una gran variedad de colores en tapas.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default InicioPages;
