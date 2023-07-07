import { ImWhatsapp } from 'react-icons/im';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className='w-full bg-[#333333] py-[4vh] flex flex-col items-center justify-center gap-5 font-Montserrat'>
      <div className='flex justify-center items-center gap-5'>
        <a
          rel="noreferrer"
          href="https://wa.me/2473400240?text=Hola%20Fermín,%20estuve%20mirando%20tu%20perfil%20junto%20con%20tus%20proyectos%20y%20me%20interesaría%20ponerme%20en%20contacto%20con%20usted.%20¡Muchas%20gracias!"
          target="_blank">
          <ImWhatsapp className='w-10 h-10' />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/fermin-solaberrieta/"
          target="_blank">
          <AiFillLinkedin className='w-10 h-10' />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/fermin234"
          target="_blank">
          <AiFillGithub className='w-10 h-10' />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          download="fermin-Solaberrieta CV.pdf"
          href="assets/Fermin Solaberrieta CV.pdf"
          title="CV_PDF">
          <FaDownload className='w-10 h-10' />
        </a>
      </div>
      <p>
        {"© 2023 - Todos los derechos reservados por "}
        <a
          className='text-[#ecd85d]'
          rel="noreferrer"
          href="https://github.com/fermin234"
          target="_blank">
          Solaberrieta Fermín
        </a>
      </p>
    </footer>
  )
}