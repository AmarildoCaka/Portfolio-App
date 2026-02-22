import '../../../App.css';

import { useId } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

    height: 10,

    borderRadius: 5,

    [`&.${linearProgressClasses.colorPrimary}`]: {

        backgroundColor: theme.palette.grey[200],

        ...theme.applyStyles('dark', {

            backgroundColor: theme.palette.grey[800],

        }),

    },

    [`& .${linearProgressClasses.bar}`]: {

        borderRadius: 5,

        backgroundColor: '#1a90ff',

        ...theme.applyStyles('dark', {

            backgroundColor: '#308fe8',

        }),

    },

}));

const NextJSCard = () => {
    
    const cardId = useId();

    const imgSectionId = useId();

    const contentSecionId = useId();

    const progressBarSection = useId();

    return (

        <>
        
            <div id={cardId} className="skill-card flex flex-col bg-white border-2 border-dashed border-black rounded-xl w-64 h-auto p-5">

                <div id={imgSectionId} className="img-section flex justify-center items-center mb-6">

                    <img id="software-card" className="software-card h-20 transition-transform duration-300 ease-in-out transform hover:scale-110" src="/public/images/SoftSkillsImg/NextJS.webp" alt="NextJS"/>

                </div>

                <div id={contentSecionId} className="content-section">

                    <div id="inner-block" className="inner-block flex flex-row justify-center items-center">

                        <FontAwesomeIcon id="check-icon" className="check-icon mt-1 mr-3" icon={faCheck} style={{ color: 'green' }}/>

                        <h3 id="skill-header" className="skill-header text-black font-bold">NextJS</h3>

                    </div>

                    <p id="skill-text" className="skill-text text-sm text-center mt-3">
    
                        Skilled in Next.js, making use of its server-side rendering, 
                        static site generation, dynamic routing and SEO capabilities, 
                        building structured and scalable web applications.

                    </p>

                </div>

                <br/>

                <hr className="horizontal-row"/>

                <div id={progressBarSection} className="progress-bar-section p-6">

                    <Stack spacing={2} sx={{ flexGrow: 1 }}>

                        <BorderLinearProgress variant="determinate" value={80}/>

                        <section id="bottom-inner-block" className="bottom-inner-block flex flex-col justify-center items-center">

                            <p id="progress-intel" className="progress-intel text-sm hover:font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110">
                                
                                Knowledge Level: 
                                
                                <span className="inline-text hover:text-green-600"> 80%</span>
                                
                            </p>

                        </section>

                    </Stack>

                </div>

            </div>
        
        </>

    );

};

export default NextJSCard;