import React from 'react';

const HeaderTwo = () => {
    return (
        <div className='lg:px-24'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-3xl' src="https://media-exp2.licdn.com/dms/image/C5603AQHxyvVVcUhGfg/profile-displayphoto-shrink_800_800/0/1631775823378?e=1660176000&v=beta&t=6LQry4b7QcL6NoWy5VZf3IMaNaOsEwP3bLDALBKQeZk" class="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div className='bg-gradient-to-r from-base-400 to-indigo-500 rounded-3xl'>
                        <h1 class="text-5xl font-bold">Hi! my name is Aurnab</h1>
                        
                        <h1 class="text-3xl font-semibold mt-4">...a FullStack Web Developer</h1>
                        <p class="py-6">I completed a web developer main course by the Programming Hero team. I am well-versed in HTML, CSS, Javascript, and react and have basic programming experience working on some personal projects. And I have a basic knowledge of databases like MongoDB and Nodejs.
                        I am quick of learning new software and technologies and can follow instructions and work with a team. You can check my resume here...</p>
                        <div className=' p-5 pl-24 lg:pl-44 flex gap-5'>
                        <button class="btn btn-outline btn-success">hire me</button>
                        <button class="btn btn-outline btn-warning">Download cv</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTwo;