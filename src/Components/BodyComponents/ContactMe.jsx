import { useId } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {

    const mainWrapperId = useId();

    const innerWrapperId = useId();

    const secondInnerBox = useId();

    return (

        <>

            <section id={mainWrapperId} className="w-full py-20 px-6 bg-slate-50 dark:bg-slate-900">

                <div className="text-center mb-16">
                
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Let’s Connect</h3>
                    
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">I am always open to discussing new projects, collaborations, or opportunities.</p>
                
                </div>

                <div id={innerWrapperId} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    <div className="flex justify-center">
                    
                        <div className="w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">

                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Amarildo Caka</h4>

                            <p className="mt-2 text-slate-600 dark:text-slate-400 font-medium">Frontend / Full-Stack Developer</p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">

                                <a href="/cvsample.txt" download className="flex-1 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">Download CV</a>

                                <a href="/LetterOfApplication" download className="flex-1 text-center px-5 py-3 rounded-xl border border-slate-400 text-slate-700 dark:text-white font-semibold transition-all duration-300 hover:bg-slate-800 hover:text-white"> Cover Letter</a>

                            </div>

                        </div>

                    </div>

                    <div id={secondInnerBox} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

                        <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        
                            <FontAwesomeIcon icon={faGithub} className="text-3xl text-slate-800 dark:text-white"/>
                            
                            <a href="https://github.com/AmarildoCaka" target="_blank" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">GitHub</a>

                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        
                            <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-600" />
                            
                            <a href="https://www.linkedin.com/in/amarildo-caka-5339572b0/" target="_blank" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">LinkedIn</a>
                            
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            
                            <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-red-500"/>
                            
                            <a href="mailto:amarildocaka18@gmail.com" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">Email</a>
                            
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            
                            <FontAwesomeIcon icon={faPhone} className="text-3xl text-green-600"/>
                            
                            <a href="tel:+355676708190" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">Phone</a>
                        
                        </div>
                    
                    </div>
                
                </div>

            </section>

        </>

    );

}

export default ContactMe;