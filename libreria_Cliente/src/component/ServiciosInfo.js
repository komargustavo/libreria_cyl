import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from "react"
import laser from "../img/colorlaser.jpg"
import plastificado from "../img/plastificado-.jpg"
import sellos from "../img/sellos.jpg"
import anillados from "../img/anillados.jpg"

const Servicios = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <>
            <main className="mx-auto py-5 xl:container my-4 section">
                <h1 className=" mb-16 text-5xl md:text-7xl p-4 bg-orange-600 text-center">Nuestros Servicios</h1>
                <div className="flex flex-wrap place-content-center">
                    {/* IMPRESIONES LASER */}
                    <div className=" p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-right'>
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

                    {/* ANILLADOS */}
                    <div className=" p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-left'>
                        <img className="w-1/3 shadow-2xl mb-10 " src={anillados} alt="Anillados" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">anillados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center"><b>Organizá tus apuntes y textos !!!</b>. Te ofrecemos los mejores
                                anillados acordes a tus trabajos y tus necesidades, con una gran variedad de colores en tapas.</p>
                        </div>
                    </div>

                    {/* SELLOS */}
                    <div className=" p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-right'>
                        <img className="w-1/3 shadow-2xl mb-10" src={sellos} alt="Sellos" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">sellos personalizados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center">Contamos con una variada gama de sellos, <b>perilla, pocket,
                                automáticos, fechadores, numeradores</b>. Podes elegir entre distintos tipos de tipografías de
                                letras e insertar imágenes.
                            </p>
                        </div>
                    </div>

                    {/* PLASTIFICADO */}
                    <div className=" p-6 text-center mt-10 flex border rounded-2xl shadow-amber-900 shadow-2xl max-w-7xl" data-aos='fade-left'>
                        <img className="w-1/3 p-4 mb-10" src={plastificado} alt="Plastificados" />
                        <div className=" w-2/3">
                            <h4 className=" mx-5 text-blue-700 font-bold uppercase text-center">plastificados </h4>
                            <p className=" m-5 ml-10 md:text-3xl text-center">Plastificados en frío y en caliente, en distintos tamaños, de excelente calidad.</p>
                        </div>
                    </div>

                </div>
            </main>


        </>
    )
}

export default Servicios
