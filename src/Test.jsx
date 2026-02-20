// React Hooks Imports:
import { useId, useState } from 'react';
import { Link } from 'react-router-dom';

// Component:

const Test = () => {

    // Component's Logic:

    const headerId = useId();

    const firstalfId = useId();
    
    const navId = useId();

    const ulId = useId();

    const liId = useId();

    const linkId = useId();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {

        setIsOpen(!isOpen);

    };

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if(section)
        {

            section.scrollIntoView({ behavior: 'smooth' });

        }

    };

    // Component's JSX:

    return (

        <>
            <header id={headerId} className='header flex justify-between items-center bg-neutral-900 hover:bg-neutral-800 duration-300 h-14 p-4'>

                <div id={firstalfId} className="logo-section">

                    <a href="/" className='logo text-white font-sans font-bold text-lg text-center hover:text-red-400 duration-300 cursor-pointer'>Amarildo Caka</a>
                
                </div>

                <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">

                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    
                    </svg>

                </button>

                <nav id={navId} className={`navbar ${isOpen ? 'block' : 'hidden'} md:block`}>

                    <ul id={ulId} className='flex flex-col md:flex-row gap-3'>

                        {
                            
                            ['home', 'about', 'education', 'personalskills', 'softskills', 'projects', 'contactme'].map((section) => (

                                <li key={section} id={liId} className='list-item p-3'>

                                    <Link to={`/${section}`} className='anchor text-white font-sans font-bold text-lg text-center hover:text-red-400 duration-300' onClick={(e) => {
                                            
                                            e.preventDefault();
                                            
                                            scrollToSection(section);
                                            
                                            setIsOpen(false);
                                        
                                        }}>

                                        {section.charAt(0).toUpperCase() + section.slice(1).replace(/skills/, ' Skills')}
                                    
                                    </Link>
                                
                                </li>
                        
                            ))
                        
                        }
                    
                    </ul>

                </nav>
            
            </header>

            {isOpen && (

                <nav className="md:hidden bg-neutral-800 text-white p-4 space-y-2">

                    {
                    
                        ['home', 'about', 'education', 'personalskills', 'softskills', 'projects', 'contactme'].map((section) => (

                            <Link key={section} to={`/${section}`} className='block text-white hover:text-red-400 duration-300' onClick={(e) => {

                                e.preventDefault();

                                scrollToSection(section);

                                setIsOpen(false);

                                }}>

                                {section.charAt(0).toUpperCase() + section.slice(1).replace(/skills/, ' Skills')}

                            </Link>

                        ))
                    
                    }

                </nav>

            )}

        </>

    );

}

// Component's Export:

export default Test;