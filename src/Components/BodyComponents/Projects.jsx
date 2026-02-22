import { useRef, useState, useEffect } from 'react';

import { projectsList } from '../../ProjectsData/projectsDataList';

const GithubIcon = () => (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
    
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  
    </svg>

);

const Projects = () => {
    
    const carouselRef = useRef(null);
  
    const [startX, setStartX] = useState(0);
  
    const [scrollLeft, setScrollLeft] = useState(0);

    const isPausedRef = useRef(false);

    const isDraggingRef = useRef(false);

    useEffect(() => {

        const carousel = carouselRef.current;

        if(!carousel)
        {

            return;

        }

        let frameId;

        const speed = 0.5;

        const scroll = () => {
        
            if(!isPausedRef.current && !isDraggingRef.current)
            {

                carousel.scrollLeft += speed;
            
                if(carousel.scrollLeft >= carousel.scrollWidth / 2)
                {
                
                    carousel.scrollLeft = 0;
                
                }
            
            }

            frameId = requestAnimationFrame(scroll);
        
        };

        frameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(frameId);
  
    }, []);

    const handleMouseDown = (e) => {
        
        isDraggingRef.current = true;

        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    
    };

    const handleMouseUp = () => { 

        isDraggingRef.current = false;
        
    };

    const handleMouseMove = (e) => {

        if(!isDraggingRef.current || !carouselRef.current)
        {

            return;

        }
        
        e.preventDefault();
        
        const x = e.pageX - carouselRef.current.offsetLeft;
        
        const walk = (x - startX) * 1;
        
        carouselRef.current.scrollLeft = scrollLeft - walk;
    
    };

    return (

        <>
        
            <section id="projects" className="flex flex-col justify-center items-center text-center mb-12">

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-14">My Projects & Experience</h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">A collection of projects I have built — from responsive interfaces to full feature web applications, each one crafted with clean code and attention to detail.</p>
                
                <div ref={carouselRef} className="relative mt-10 w-full max-w-6xl mx-auto overflow-x-auto flex gap-5 cursor-grab active:cursor-grabbing select-none" onMouseEnter={() => { 

                    isPausedRef.current = true;

                }} onMouseLeave={() => {
                    
                    isPausedRef.current = false;

                    isDraggingRef.current = false;
                
                }} onMouseDown={handleMouseDown} onMouseUp={() => {

                    handleMouseUp();

                }} onMouseMove={handleMouseMove}>

                    {[...projectsList, ...projectsList].map((i, index) => (

                        <>
                        
                            <div key={index} className="flex-shrink-0 border border-dashed border-black dark:border-white w-60 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
                                
                                <div className="relative overflow-hidden rounded-t-xl">
                                
                                    <img className="w-full h-24 object-cover transition-transform duration-300 hover:scale-105" src={i.projectImg} alt="Project Image"/>

                                    <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                                                                            
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-black dark:bg-white rounded-full" />
                                        
                                    </div>

                                    <div className="p-3 flex flex-col h-64">
                                    
                                    <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-indigo-600 transition-colors duration-300 mb-2">{i.projectName}</h1>
                                    
                                    <div className="flex flex-wrap gap-1 mb-2">

                                        {i.techStack?.map((tech) => (

                                            <>
                                            
                                                <span key={tech} className="bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100 px-1 py-0.5 rounded-full text-[0.6rem] font-semibold">{tech}</span>
                                            
                                            </>
                                        
                                        ))}

                                    </div>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 text-xs flex-1 overflow-y-auto">{i.projectDescription}</p>

                                    <div className="w-24 h-0.5 bg-black dark:bg-white rounded-full mx-auto my-2"/>
                                    
                                    <div className="flex flex-col items-center gap-2">

                                        <div className="flex items-center gap-x-2">
                                        
                                            <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"/>
                                            
                                            <p className="text-gray-600 dark:text-gray-300 text-xs">View this project on GitHub</p>
                                        
                                        </div>

                                        <a href={i.projectRepoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center text-white font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 text-sm">

                                            <GithubIcon/>
                                            
                                            View Repo
                                        
                                        </a>

                                    </div>

                                </div>

                            </div>
                        
                        </>

                    ))}

                </div>

            </section>
        
        </>

    );

};

export default Projects;