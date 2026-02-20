import { useId } from "react";

const Home = () => {

    const wrapperId = useId();

    return (

        <>
        
            <section id={wrapperId} className="wrapper-section grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 justify-evenly place-items-center gap-y-14 p-16">

                <div id="inner-text-box" className="flex flex-col items-start gap-6 text-left max-w-xl">
                    
                    <span className="text-sm uppercase tracking-widest text-red-400 font-semibold">Welcome to my portfolio</span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">Hello, I’m {" "} <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Amarildo Caka</span></h1>

                    <p className="text-lg sm:text-xl text-slate-300 font-medium">Frontend Developer specializing in <span className="text-white font-semibold"> React, Next.js & Modern UI Systems</span></p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        
                        <a href="/personal_docs.rar" download className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">Download CV</a>

                        <a href="#projects" className="px-6 py-3 rounded-xl border border-slate-500 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black">View Projects</a>

                    </div>

                </div>

                <div id="inner-img-box" className="inner-img-box mt-10 flex justify-center items-center">

                    <div className="relative group">

                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 opacity-70 blur-lg group-hover:opacity-100 transition duration-500"></div>

                        <img  id="main-img" className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105" src="/images/my-image.jpg" alt="Amarildo Caka"/>

                    </div>

                </div>

            </section>

        </>

    );

}

export default Home;