import { useId } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {

    const mainWrapperId = useId();

    const innerWrapperId = useId();

    return (

        <>

            <section id={mainWrapperId} className='main-wrapper-box flex flex-col justify-center place-items-center text-center'>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-14">My Projects & Experience</h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">A collection of projects I have built — from responsive interfaces to full feature web applications, each one crafted with clean code and attention to detail.</p>

                <div id={innerWrapperId} className='inner-wrapper-box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 justify-center place-items-center text-center gap-x-10 gap-y-10 p-20'>

                    <div className="project-element-box text-center">

                        <div id='first-project' className='first-project border border-black rounded-xl dark:bg-white'>

                            <div id='project-img-box' className='project-img-box p-3'>

                                <img id='project-img' className='project-img hover:scale-105 duration-300' src="/public/images/test-img.png" alt="Project Img"/>

                            </div>

                            <div id='project-title-box' className='project-title-box pb-6'>

                                <h3 id='project-name' className='project-name font-semibold hover:font-bold hover:text-blue-400 hover:scale-105 duration-300'>Project name.</h3>

                            </div>
                            
                            <div id='project-link-box' className='project-link-box border-t border-black p-2'>

                                <a id='project-link' className='project-link flex flex-col justify-center place-items-center text-center text-black font-bold hover:text-blue-600 hover:scale-105 duration-300' href="https://github.com/AmarildoCaka" target='_blank'>

                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#333" className='project-icon text-black hover:scale-105 duration-300 hover:text-blue-600'/>

                                    Project Repo
                                    
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="project-element-box text-center">

                        <div id='first-project' className='first-project border border-black rounded-xl dark:bg-white'>

                            <div id='project-img-box' className='project-img-box p-3'>

                                <img id='project-img' className='project-img hover:scale-105 duration-300' src="/public/images/test-img.png" alt="Project Img"/>

                            </div>

                            <div id='project-title-box' className='project-title-box pb-6'>

                                <h3 id='project-name' className='project-name font-semibold hover:font-bold hover:text-blue-400 hover:scale-105 duration-300'>Project name.</h3>

                            </div>

                            <div id='project-link-box' className='project-link-box border-t border-black p-2'>

                                <a id='project-link' className='project-link flex flex-col justify-center place-items-center text-center text-black font-bold hover:text-blue-600 hover:scale-105 duration-300' href="https://github.com/AmarildoCaka" target='_blank'>

                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#333" className='project-icon text-black hover:scale-105 duration-300 hover:text-blue-600'/>

                                    Project Repo
                                    
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="project-element-box text-center">

                        <div id='first-project' className='first-project border border-black rounded-xl dark:bg-white'>

                            <div id='project-img-box' className='project-img-box p-3'>

                                <img id='project-img' className='project-img hover:scale-105 duration-300' src="/public/images/test-img.png" alt="Project Img"/>

                            </div>

                            <div id='project-title-box' className='project-title-box pb-6'>

                                <h3 id='project-name' className='project-name font-semibold hover:font-bold hover:text-blue-400 hover:scale-105 duration-300'>Project name.</h3>

                            </div>

                            <div id='project-link-box' className='project-link-box border-t border-black p-2'>

                                <a id='project-link' className='project-link flex flex-col justify-center place-items-center text-center text-black font-bold hover:text-blue-600 hover:scale-105 duration-300' href="https://github.com/AmarildoCaka" target='_blank'>

                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#333" className='project-icon text-black hover:scale-105 duration-300 hover:text-blue-600'/>

                                    Project Repo
                                    
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="project-element-box text-center">

                        <div id='first-project' className='first-project border border-black rounded-xl dark:bg-white'>

                            <div id='project-img-box' className='project-img-box p-3'>

                                <img id='project-img' className='project-img hover:scale-105 duration-300' src="/public/images/test-img.png" alt="Project Img"/>

                            </div>

                            <div id='project-title-box' className='project-title-box pb-6'>

                                <h3 id='project-name' className='project-name font-semibold hover:font-bold hover:text-blue-400 hover:scale-105 duration-300'>Project name.</h3>

                            </div>

                            <div id='project-link-box' className='project-link-box border-t border-black p-2'>

                                <a id='project-link' className='project-link flex flex-col justify-center place-items-center text-center text-black font-bold hover:text-blue-600 hover:scale-105 duration-300' href="https://github.com/AmarildoCaka" target='_blank'>

                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#333" className='project-icon text-black hover:scale-105 duration-300 hover:text-blue-600'/>

                                    Project Repo
                                    
                                </a>

                            </div>

                        </div>

                    </div>
                
                </div>

            </section>
        
        </>

    );

}

export default Projects;