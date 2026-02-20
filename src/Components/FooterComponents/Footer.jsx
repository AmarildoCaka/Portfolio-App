import { useId } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const footerId = useId();

    const innerFooterId = useId();

    const firstFooterId = useId();

    const secondFooteId = useId();

    return (

        <>
        
            <footer id={footerId} className="footer-section bg-neutral-900 hover:bg-neutral-800 duration-300 h-20">

                <section id={innerFooterId} className="inner-footer-section flex flex-col justify-center align-middle p-3">

                    <p id={firstFooterId} className="first-footer-text text-center text-white font-bold hover:text-red-400 duration-300">

                        <FontAwesomeIcon icon={faCopyright}/> All rights reserverd.

                    </p>

                    <p id={secondFooteId} className="second-footer-text text-center text-white font-bold hover:text-red-400 duration-300">Designed and developed by Amarildo Caka!</p>

                </section>

            </footer>

        </>

    );

}

export default Footer;