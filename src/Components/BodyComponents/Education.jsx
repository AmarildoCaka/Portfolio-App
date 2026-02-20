import { useId, useState } from "react";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [

    {

        label: 'My Gymnasium Education',

        description: `I attended the high school of Hasan Meti in Albania, Mjede, 
                    where I focused primarly in subjects such as mathematics, sciences and informatics. 
                    My years there helped me build a solid foundation in personal important skills such 
                    as analytical and critical views and prespectives, problem solving and critical thinking. 
                    During my studies, I actively participated in extracurricular activities, 
                    programming and IT clubs, events such as mathematics evenets, 
                    which contributed to both my academic and personal growth, amking me 
                    more mind opened and and capable as a person.`

    },

    {

        label: 'My University Education:',

        description: `I earned my degree in Information Technology from Shkodra's University 
                    Luigj Gurakuqi, Albania, with a focus on software development. My studies 
                    covered programming languages like Python, C, C++, JavaScript, TypeScript, 
                    and SQL, along with networking, web security, system design, and both 
                    object-oriented and functional programming. Throughout my time at university, 
                    I participated in various projects and research, refining my skills in 
                    problem-solving and full-stack development. This hands-on experience, 
                    combined with a rigorous curriculum, equipped me with the expertise 
                    and adaptability needed for my engineering career, contributing to both 
                    my professional and personal growth.`

    },

    {

        label: 'My Work Experience:',

        description: `I have gained valuable experience in software development as a front-end developer, focusing on 
                    building web applications. My expertise includes ReactJS, Vite, TypeScript, Tailwind, and Bootstrap, 
                    with a strong emphasis on client-side interactivity and user experience. As a freelance front-end 
                    developer, I was responsible for delivering efficient, scalable, and user-friendly systems, 
                    often working with cross-functional teams to meet tight deadlines. Additionally, my back-end experience 
                    has provided insights into performance and scalability, enabling me to create tailored solutions for 
                    both clients and organizations. I am committed to continuous professional growth, staying updated on 
                    the latest industry trends and technologies.`

    },

];

const Education = () => {

    const wrapperId = useId();

    const entryTextId = useId();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };
    
    const handleBack = () => {

        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    };
    
    const handleReset = () => {

        setActiveStep(0);

    };

    return (

        <>

            <section id={wrapperId} className="wrapper-box bg-slate-50 dark:bg-custom-even-darker-blue p-20">

                <div className="text-center mb-16">

                    <h3 id={entryTextId}  className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">My Education</h3>
                    
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">A glimpse into my academic journey and the foundations that shaped my path into software development.</p>

                </div>

                <div className='inner-section flex items-center justify-center place-items-start'>

                    <Box sx={{ maxWidth: 400 }}>

                        <Stepper activeStep={activeStep} orientation="vertical">

                            {steps.map((step, index) => (

                                <Step key={step.label}>

                                    <StepLabel optional={

                                        index === steps.length - 1 ? (

                                            <Typography variant="caption" className="dark:text-white">Final Detail</Typography>

                                        ) : null}>

                                        <p className="dark:text-white">{step.label}</p>

                                    </StepLabel>

                                    <StepContent>
                                        
                                        <Typography className="dark:text-white">{step.description}</Typography>

                                        <Box sx={{ mb: 2 }}>

                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                            
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            
                                            </Button>

                                            <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }} className="dark:text-white dark:hover:bg-blue-800">Previous Details</Button>

                                        </Box>

                                    </StepContent>

                                </Step>

                            ))}

                        </Stepper>

                        {activeStep === steps.length && (

                            <Paper square elevation={0} sx={{ p: 3 }} className="mt-5 dark:bg-general-body-darkmode-color dark:border-2 border-white rounded-xl border-dashed">

                                <Typography className="dark:text-white dark:font-bold">You have reached the end!</Typography>

                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} className="dark:text-white dark:font-bold dark:hover:bg-blue-900">Reset</Button>

                            </Paper>

                        )}

                    </Box>

                </div>

            </section>

        </>

    );

}

export default Education;