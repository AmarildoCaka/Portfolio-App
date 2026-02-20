import { useId, useState, useEffect } from 'react';

import { useTheme } from '../../../ThemeContext';

import LightThemeImgComp from './ThemeImg/LightThemeImg';
import DarkThemeImgComp from './ThemeImg/DarkThemeImg';
import SystemThemeImgComp from './ThemeImg/SysThemeImg';

const SiteThemeComp = () => {

  const { darkMode, toggleTheme, applySystemTheme } = useTheme();

  const firstDropdownLiId = useId();

  const secondDropdownLiId = useId();

  const dropdownUlId = useId();

  const hrId = useId();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState('Theme');

  const toggleDropdown = () => {

    setIsOpen(!isOpen);

  }

  const handleSelect = (option) => {

    setSelectedOption(option);

    setIsOpen(false);

    if(option === 'Light')
    {

      toggleTheme('light');

    }

    else if(option === 'Dark')
    {

      toggleTheme('dark');

    }

    else if(option === 'System')
    {

      applySystemTheme();

    }

  };

  useEffect(() => {

    if(darkMode)
    {

      document.documentElement.classList.add('dark');

    }

    else
    {

      document.documentElement.classList.remove('dark');

    }

  }, [darkMode]);

  return (

    <>
    
      <div className="theme-selection-wrapper relative inline-block text-left">

        <button type="button" className="theme-select-btn inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-slate-50 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none dark:text-gray-300 dark:bg-gray-700 dark:border-gray-500 hover:dark:bg-gray-600" onClick={() => {

          toggleDropdown();

        }}>{selectedOption}</button>

        {isOpen && (

          <>
          
            <div className="ul-wrapper-box absolute z-[999] mt-1 w-28 bg-slate-50 border border-gray-300 rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-500 right-0">
              
              <ul id={dropdownUlId} className="dropdown-ul flex flex-col justify-center place-items-center text-center bg-slate-50 dark:bg-gray-700 py-1">

                <li id={firstDropdownLiId} className="dropdown-li">
              
                  <button type="button" className="theme-btn block hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => {

                    handleSelect('Light');

                  }}>
              
                    <LightThemeImgComp/>
              
                    <sup className='theme-select-subtext font-bold text-black dark:text-white'>Light</sup>
              
                  </button>
              
                </li>

                <hr id={hrId} className="dropdown-hr w-20 dark:border-gray-600"/>

                <li id={secondDropdownLiId} className="dropdown-li">

                  <button type="button" className="theme-btn block hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => {

                    handleSelect('Dark');

                  }}>
                
                    <DarkThemeImgComp/>
                
                    <sup className='theme-select-subtext font-bold text-black dark:text-white'>Dark</sup>
                
                  </button>
                
                </li>

                <hr id={hrId} className="dropdown-hr w-20 dark:border-gray-600"/>

                <li id={secondDropdownLiId} className="dropdown-li">

                  <button type="button" className="theme-btn block hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => {

                    handleSelect('System');

                  }}>
                
                    <SystemThemeImgComp/>
                
                    <sup className='theme-select-subtext font-bold text-black dark:text-white'>System</sup>
                
                  </button>
                
                </li>

              </ul>

            </div>
          
          </>
          
        )}

      </div>
    
    </>

  );

};

export default SiteThemeComp;