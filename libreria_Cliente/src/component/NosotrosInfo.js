import { Link } from "react-router-dom"
import lapiz from '../img/lapiz.jpg'

const Nosotros = () => {
    return (
        < >
            <main className=" bg-orange-200 mx-auto py-5 xl:container my-14 ">
                <h1 className=" text-5xl md:text-7xl p-4 bg-orange-600 text-center">Conoce mas Sobre Nosotros</h1>
                <div className=" mt-10 md:flex">
                    <img className="w-1/8 p-5 " src={lapiz} alt="lapiz" />
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
            </main>

        </>
    )
}

export default Nosotros
