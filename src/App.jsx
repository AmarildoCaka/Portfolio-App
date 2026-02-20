import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './ThemeContext';

import NavbarHeaderComp from './Components/HeaderComponents/NavbarHeaderComp';
import Home from './Components/BodyComponents/Home';
import About from './Components/BodyComponents/About';
import Education from './Components/BodyComponents/Education';
import PersonalSkills from './Components/BodyComponents/PersonalSkills';
import SoftSkills from './Components/BodyComponents/SoftSkills';
import Projects from './Components/BodyComponents/Projects';
import ContactMe from './Components/BodyComponents/ContactMe';
import Footer from './Components/FooterComponents/Footer';
import ScrollToTopBtn from './Components/LogicComponents/GoToTopBtn';

const App = () => {

  return (

    <>

      <ThemeProvider>

        <Router>

          <section id="navHeaderComponent">

            <NavbarHeaderComp/>

          </section>

          <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/education" element={<Education/>}/>

            <Route path="/personalskills" element={<PersonalSkills/>}/>

            <Route path="/softskills" element={<SoftSkills/>}/>

            <Route path="/projects" element={<Projects/>}/>

            <Route path="/contactme" element={<ContactMe/>}/>

          </Routes>

        </Router>

        <section id="about">

          <About/>

        </section>

        <section id="education">

          <Education/>

        </section>

        <section id="personalskills">

          <PersonalSkills/>

        </section>

        <section id="softskills">

          <SoftSkills/>

        </section>

        <section id='projects'>

          <Projects/>

        </section>

        <section id="contactme">

          <ContactMe/>

        </section>

        <section id="footer">

          <Footer/>

        </section>

        <ScrollToTopBtn/>

      </ThemeProvider>

    </>

  );

}

export default App;