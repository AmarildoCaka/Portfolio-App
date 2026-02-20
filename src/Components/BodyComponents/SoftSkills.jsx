import { useId } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Main Skills Cards:

import ReactCard from '../SoftSkillsCards/MainSkillsCards/ReactCard';

// Additional Soft Skills Cards:

import NextJSCard from '../SoftSkillsCards/AdditionalSkillsCards/NextJSCard';
import TypeScriptCard from '../SoftSkillsCards/AdditionalSkillsCards/TypeScriptCard';
import JQueryCard from '../SoftSkillsCards/AdditionalSkillsCards/JQueryCard';
import JsonCard from '../SoftSkillsCards/AdditionalSkillsCards/JsonCard';

// Testing, Designing & Styling Skills Cards:

import TailwindCard from '../SoftSkillsCards/TDSCards/TailwindCard';
import BootstrapCard from '../SoftSkillsCards/TDSCards/BootstrapCard';
import PostmanCard from '../SoftSkillsCards/TDSCards/PostmanCard';
import FigmaCard from '../SoftSkillsCards/TDSCards/FigmaCard';

// Version Control Skills Cards:

import VersionControlCard from '../SoftSkillsCards/VersionaControlCards/VersionControlCard';

const SoftSkills = () => {

    const secondWrapperId = useId();

    return (

        <>

            <section className='main-wrapper-box flex flex-col justify-center items-center bg-slate-50 dark:bg-custom-even-darker-blue'>

                <div className="text-center my-16">

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">My Soft Skills</h3>
                    
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto"> A look into my personal software skill and habits that shape the way I solve problems, work and grow as a developer.</p>
                    
                </div>

                <FontAwesomeIcon icon={faArrowDown} className='skill-leading-arrow mb-10 text-black dark:text-white' style={{ width: "35px", height: "40px" }}/>

                <div id={secondWrapperId} className="main-wrapper-box grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center text-center items-center gap-x-5 gap-y-5 h-sceen mt-5 mb-16">

                    <ReactCard/>

                    <NextJSCard/>

                    <TypeScriptCard/>

                    <JQueryCard/>

                    <JsonCard/>

                </div>

                <hr className="border-0 h-[1.7px] bg-[#333] w-3/4 mx-auto my-5"/>

                <h3 className="soft-skills-text text-2xl text-black text-center font-bold hover:text-red-400 dark:text-white dark:hover:text-red-400 duration-300 mt-6 mb-7">Testing, Designing & Styling</h3>

                <div id={secondWrapperId} className="main-wrapper-box grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 place-items-center gap-x-9 gap-y-9 h-sceen mt-7 mb-16">

                    <TailwindCard/>

                    <BootstrapCard/>

                    <PostmanCard/>

                    <FigmaCard/>

                </div>

                <hr className="border-0 h-[1.7px] bg-[#333] w-3/4 mx-auto my-5"/>

                <h3 className="soft-skills-text text-2xl text-black text-center font-bold hover:text-red-400 dark:text-white dark:hover:text-red-400 duration-300 mt-6 mb-7">Version Control</h3>

                <div id={secondWrapperId} className="main-wrapper-box grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 place-items-center gap-x-9 gap-y-9 h-sceen mt-7 mb-16">

                    <VersionControlCard/>

                </div>

            </section>
        
        </>

    );

}

export default SoftSkills;