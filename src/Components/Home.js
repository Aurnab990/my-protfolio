import React from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';


const Home = () => {
    return (
        <div>
            <HeaderTwo></HeaderTwo>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
      
        </div>
    );
};

export default Home;