import React from 'react';
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
      
        </div>
    );
};

export default Home;