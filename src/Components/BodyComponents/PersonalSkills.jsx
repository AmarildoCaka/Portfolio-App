import { useId } from "react";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PersonalSkills = () => {

    const wrapperId = useId();

    const entryTextHeader = useId();

    return (

        <>
        
            <section className="w-full py-20 px-5">

                <div className="text-center">

                    <h3 id={entryTextHeader} className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">My Personal & Social Skills</h3>
                    
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Beyond the screen, I am a people person — empathetic, adaptable, and driven by a genuine passion for learning, a good communicator, collaborative engineer and motivated worker to every team and environment I am part of.</p>

                </div>

                <section id={wrapperId} className="personal-skills-box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 justify-center place-items-center gap-x-9 gap-y-9 h-sceen mb-7 p-16">

                    <Card className="dark:bg-custom-even-darker-blue dark:border-2 border-white" sx={{
                        
                        maxWidth: 345,

                        transition: 'transform 0.3s ease',

                        '&:hover': {

                            transform: 'scale(1.05)',

                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)'

                        },
                        
                    }}>

                        <CardContent>

                            <Typography className="card-header dark:text-white dark:hover:duration-300 dark:hover:scale-105" variant="h6">Problem Solver</Typography>

                        </CardContent>

                        <CardMedia component="img" height="190" image="/public/images/problem-solver.jpeg" alt="Good Communicator Image"/>

                        <CardContent>

                            <Typography className="sub-header dark:text-white" variant="body2" color="text.secondary">Able to think out of the box for different problems!</Typography>

                        </CardContent>

                    </Card>

                    <Card className="dark:bg-custom-even-darker-blue dark:border-2 border-white" sx={{ 
                        
                        maxWidth: 345,

                        transition: 'transform 0.3s ease',

                        '&:hover': {

                            transform: 'scale(1.05)',

                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',

                        },
                        
                    }}>

                        <CardContent>

                            <Typography className="card-header dark:text-white dark:hover:duration-300 dark:hover:scale-105" variant="h6">Good Communicator</Typography>

                        </CardContent>

                        <CardMedia component="img" height="190" image="/public/images/good-communcator.png" alt="Good Communicator Image"/>

                        <CardContent>

                            <Typography className="sub-header dark:text-white" variant="body2" color="text.secondary">Effective communicator, focused on clarity and collaboration!</Typography>

                        </CardContent>

                    </Card>

                    <Card className="dark:bg-custom-even-darker-blue dark:border-2 border-white" sx={{ 
                        
                        maxWidth: 345,

                        transition: 'transform 0.3s ease',

                        '&:hover': {

                            transform: 'scale(1.05)',

                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',

                        },
                        
                    }}>

                        <CardContent>

                            <Typography className="card-header dark:text-white dark:hover:duration-300 dark:hover:scale-105" variant="h6">Collaborative Engineer</Typography>

                        </CardContent>

                        <CardMedia component="img" height="190" image="/public/images/collaborative-engeneer.webp" alt="Collaborative Engineer Image"/>

                        <CardContent>

                            <Typography className="sub-header dark:text-white" variant="body2" color="text.secondary">Team-oriented engineer driving innovation through collaboration!</Typography>

                        </CardContent>

                    </Card>

                    <Card className="dark:bg-custom-even-darker-blue dark:border-2 border-white" sx={{ 
                        
                        maxWidth: 345,

                        transition: 'transform 0.3s ease',

                        '&:hover': {

                            transform: 'scale(1.05)',

                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',

                        },
                        
                    }}>

                        <CardContent>

                            <Typography className="card-header dark:text-white dark:hover:duration-300 dark:hover:scale-105" variant="h6">Motivated Worker</Typography>

                        </CardContent>

                        <CardMedia component="img" height="190" image="/public/images/motivated-worker.jpg" alt="Motivated Worker Image"/>

                        <CardContent>

                            <Typography className="sub-header dark:text-white" variant="body2" color="text.secondary">Driven crafter focused on improvement and excellence!</Typography>

                        </CardContent>

                    </Card>

                </section>

            </section>
        
        </>

    );

}

export default PersonalSkills;