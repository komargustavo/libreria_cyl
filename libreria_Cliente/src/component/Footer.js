import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMapMarkerAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <footer className="sitio-fin bottom-0 w-full">
                <div className=' container mx-auto grid grid-cols-2'>
                    <div className='w-1/4'>
                        <div id="copyright">Copyright&copy; 2022 - Todos los derechos reservados</div>
                    </div>
                    <div className="text-5xl  w-1/4" >
                        <p className=" text-white text-3xl  text-center">Comunicate con nosotros</p>
                        <div className='flex justify-center pt-4'>
                            <a className="mr-8" href="https://www.facebook.com/Librer%C3%ADa-CL-108687720756001/?ref=pages_you_manage" title="Seguinos en facebook">
                                <FontAwesomeIcon icon={faFacebook} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                            </a>
                            <a className="mr-8" href="https://api.whatsapp.com/send?phone=5493794917780" title="Seguinos en whatsapp">
                                < FontAwesomeIcon icon={faWhatsappSquare} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                            </a>

                            <Link to="/contacto" title="Envianos un Correo">
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>)
};

export default Footer;
