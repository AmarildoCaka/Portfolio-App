import { useId, useState } from 'react';

import { Link } from 'react-router-dom';

import SiteThemeComp from '../LogicComponents/ThemeDir/SiteThemeComp';

const NavbarHeaderComp = () => {

  const headerId = useId();

  const firstalfId = useId();

  const navId = useId();

  const ulId = useId();

  const liId = useId();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if(section)
    {

      section.scrollIntoView({ behavior: 'smooth' });

    }

};

  return (

    <>

      <header id={headerId} className='header flex justify-between fixed top-0 left-0 z-50 items-center bg-neutral-900 hover:bg-neutral-800 w-full duration-300 h-14 p-4'>
    
        <div id={firstalfId} className="logo-section">

          <a href="/" className='logo text-white font-sans font-bold text-lg text-center hover:text-red-400 duration-300 cursor-pointer'>Amarildo Caka</a>
        
        </div>

        <button onClick={toggleMenu} className="block xl:hidden text-white focus:outline-none z-50">

          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={(isOpen)? 'M6 18L18 6M6 6l12 12': 'M4 6h16M4 12h16M4 18h16'}/></svg>
        
        </button>

        <nav id={navId} className="navbar hidden xl:flex ml-auto">

          <ul id={ulId} className='flex flex-col xl:flex-row gap-3'>
            
            {['home', 'about', 'education', 'personalskills', 'softskills', 'projects', 'contact me'].map((section) => (

              <>
              
                <li key={section} id={liId} className='list-item p-3'>
                    
                  <Link to={`/${section}`} className='anchor text-white font-sans font-bold text-lg text-center hover:text-red-400 duration-300' onClick={(e) => {
                      
                    e.preventDefault();

                    scrollToSection(section);
                  
                  }}>{section.charAt(0).toUpperCase() + section.slice(1).replace(/skills/, ' Skills')}</Link>
                
                </li>
              
              </>

            ))}

          </ul>
        
        </nav>

        <div id='responsive-theme-block-id' className="responsive-theme-block hidden xl:block">

          <SiteThemeComp/>

        </div>

      </header>

      <nav className={`xl:hidden fixed top-14 left-0 w-full bg-neutral-800 text-white z-40 transition-all duration-300 ease-in-out ${(isOpen)? 'max-h-screen opacity-100 pointer-events-auto': 'max-h-0 opacity-0 pointer-events-none'}`}>
        
        <div className="p-6 space-y-3 text-right">
        
          {['home', 'about', 'education', 'personalskills', 'softskills', 'projects', 'contactme'].map((section) => (
        
            <Link key={section} to={`/${section}`} className='block text-white hover:text-red-400 duration-300' onClick={(e) => {
                
                e.preventDefault();

                scrollToSection(section);
                
                setIsOpen(false);
              
            }}>{section.charAt(0).toUpperCase() + section.slice(1).replace(/skills/, ' Skills')}</Link>
          
          ))}

          <div className="pt-4">
            
            <SiteThemeComp/>

          </div>

        </div>

      </nav>

    </>

  );

};

export default NavbarHeaderComp;