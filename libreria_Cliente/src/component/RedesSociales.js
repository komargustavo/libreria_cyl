import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMapMarkerAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import styles from '../css/estilo.css';

const RedesSociales = () => {
    return (
        <>
            <div className="mt-20 " >
                <p className="text-5xl font-black text-center mt-36">Belgrano Nº 1778. Corrientes - Cap.
                    <a href="https://goo.gl/maps/MRLieoJpit3CQKdQ8" >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                    </a>
                </p>
            </div>
            {/* <div class="redes-sociales"> */}

            <div className="mt-8 text-5xl center flex justify-center">
                <a className="mr-8" href="https://www.facebook.com/Librer%C3%ADa-CL-108687720756001/?ref=pages_you_manage" title="Seguinos en facebook">
                    <FontAwesomeIcon icon={faFacebook} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                </a>
                <a className="mr-8" href="https://api.whatsapp.com/send?phone=5493794917780"  title="Seguinos en whatsapp">
                    < FontAwesomeIcon icon={faWhatsappSquare} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                </a>

                <Link to="/contacto" title="Envianos un Correo">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className=" text-6xl hover:text-blue-900 hover:scale-150 transition-transform" />
                </Link>
            </div>

        </>
    )
}

export default RedesSociales
