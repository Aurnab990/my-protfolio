import React from 'react';

const Skills = () => {
    return (
        <div className='lg:px-44'>
            <h1 className='text-4xl font-senibold p-12 text-white font-sans'>My Skills</h1>
            <progress class="progress w-56 mb:4"></progress>
           <div className='grid grid-cols-2 lg:grid-cols-4 mt-10'>
           <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
            <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
            <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://static.javatpoint.com/images/javascript/javascript_logo.png" />
            <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
            <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" />
            <img style={{"width":"96px"}} className="mask mask-squircle bg-slate-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-400" src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/60232c7fee9f278674db9c2c_9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png" />
           </div>
            
        </div>
    );
};

export default Skills;