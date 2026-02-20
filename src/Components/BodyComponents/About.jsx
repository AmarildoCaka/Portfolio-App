import { useId } from "react";

import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    const mainWrapperSectionId = useId();

    const entryTextId = useId();

    const wrapperSectionId = useId();

    const firstGridBoxId = useId();

    const secondGridBoxId = useId();

    const firstInnerBox = useId();

    return (

        <>

            <section id={mainWrapperSectionId} className="main-wrapper-box bg-slate-50 rounded-xl m-10 p-7 dark:bg-custom-even-darker-blue">

                <h3 id={entryTextId} className="about-me-text text-2xl text-black text-center font-bold hover:text-red-400 mb-6 dark:text-white dark:hover:text-red-400 duration-300">About Me</h3>

                <section id={wrapperSectionId} className="wrapper-box grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 text-center">

                    <div id={firstGridBoxId} className="first-box text-center p-5">

                        <h3 className="self-intro-text text-xl text-black text-center font-bold hover:text-red-400 dark:text-white dark:hover:text-red-400 duration-300">Full-Stack Software Developer</h3>

                        <div id={firstInnerBox} className="inner-section p-5">

                            <p className="informative-text flex flex-row text-lg text-left text-black dark:text-white">

                                <FontAwesomeIcon icon={faMinus} id="dash-icon" className="dash-icon mr-3 mt-2 text-custom-green dark:text-dark-mode-text-symbol-color" size="xs"/>

                                Hi, I am Amarildo — a Front-End Developer specializing in React and Next.js, focused on building fast, scalable, and visually refined web applications. I craft seamless user experiences through clean, accessible interfaces and enjoy tackling complex UI challenges with thoughtful, efficient solutions. I stay current with modern front-end practices including performance optimization, component-driven architecture, and responsive design.

                            </p>

                            <br/>

                            <ul className="list">

                                <li id="first-li" className="list-item text-lg text-left text-black m-4 dark:text-white">
                                    
                                    <div className="listItem-inners flex flex-row">

                                        <FontAwesomeIcon id="check-icon" className="check-icon mr-3 text-custom-green dark:text-dark-mode-text-symbol-color" icon={faCheck}/>
                                    
                                        Proficient in React, Next.js, TypeScript and modern JavaScript (ES6+).

                                    </div>
                                
                                </li>

                                <li id="second-li" className="list-item text-lg text-left text-black m-4 dark:text-white">
                                
                                    <div className="listItem-inners flex flex-row">
                                
                                        <FontAwesomeIcon id="check-icon" className="check-icon mr-3 mt-2 text-custom-green dark:text-dark-mode-text-symbol-color" icon={faCheck}/>
                                
                                        Skilled in integrating front-end frameworks and libraries like Tailwind CSS, Bootstrap and Font Awesome.
                                
                                    </div>
                                
                                </li>

                                <li id="third-li" className="list-item text-lg text-left text-black m-4 dark:text-white">
                                    
                                    <div className="listItem-inners flex flex-row">
                                    
                                        <FontAwesomeIcon id="check-icon" className="check-icon mr-3 mt-2 text-custom-green dark:text-dark-mode-text-symbol-color" icon={faCheck}/>
                                    
                                        Experienced in creating dynamic, responsive and visually refined web applications with a strong focus on performance and user experience.
                                    
                                    </div>
                                
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div id={secondGridBoxId} className="second-box text-center mt-5">

                        <div className="container flex justify-center place-items-center">

                            <img id="img" className="my-image w-96 h-auto rounded-xl" src="../../../public/images/image.jpg" alt={'My photo'}/>

                            <div id="middle" className="middle gap-2">

                                <p className="email-link">

                                    <a id="email" className="email text-xl font-semibold text-white" href="mailto:amarildocaka@gmail.com" target="_blank">amarildocaka@gmail.com</a>

                                </p>

                                <p className="phone-link">

                                    <a id="phone-num" className="phone-num text-xl font-semibold text-white" href="tel:+355676708190" target="_blank">+355 06 76708190</a>

                                </p>
                                
                            </div>

                        </div>

                    </div>

                </section>

            </section>
        
        </>

    );

}
export default About;