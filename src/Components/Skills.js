import React from 'react';

const Skills = () => {
    return (
        <div className='lg:px-44'>
            <h1 className='text-3xl font-semibold mt-5 lg:mt-12 '>My Skills</h1>
            <progress class="progress w-56"></progress>
            <br></br>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-28'>
            <div className='mt-5 lg:mt-24'>
            HTML <progress class="progress progress-error w-56" value="80" max="100"></progress>
            <br></br>
            CSS <progress class="progress progress-error w-56" value="80" max="100"></progress>
            <br></br>
            Javascript <progress class="progress progress-error w-56" value="70" max="100"></progress>
            <br></br>
            React <progress class="progress progress-error w-56" value="70" max="100"></progress>
            <br></br>
            MongoDB <progress class="progress progress-error w-56" value="56" max="100"></progress>
            </div>
            <div>
                <img style={{"width":"456px"}} src='https://www.bizzmine.com/images/articles/careers/Front-end-developer.png' alt='image'></img>
            </div>
            </div>
        </div>
    );
};

export default Skills;