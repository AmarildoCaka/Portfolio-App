// React Hooks Imports:

import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Component:

const ScrollToTopBtn = () => {

    // Component's Logic:

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {

        if(window.scrollY > 300)
        {

            setIsVisible(true);

        }
        
        else
        {

            setIsVisible(false);
        
        }

    };

    const scrollToTop = () => {

        window.scrollTo(

            {
                
                top: 0,
                
                behavior: 'smooth',
            
            }

        );

    };

    useEffect(() => {

        window.addEventListener('scroll', toggleVisibility);
        
        return () => {

            window.removeEventListener('scroll', toggleVisibility);

        };

    }, []);

    // Component's JSX:

    return (

        <>
        
            <div>

                {
                
                    isVisible && (

                        <button onClick={scrollToTop} style={
                            
                            {

                                position: 'fixed',

                                bottom: '50px',

                                right: '30px',

                                padding: '10px 15px',

                                backgroundColor: '#007bff',

                                color: '#fff',

                                border: 'none',

                                borderRadius: '5px',

                                cursor: 'pointer',

                                zIndex: 1000,

                            }}>

                            <FontAwesomeIcon icon={faArrowUp} size="1x" color="#FFFFFF"/>

                        </button>
                    
                    )
                
                }

            </div>
        
        </>

    );

};

// Component's Export:

export default ScrollToTopBtn;