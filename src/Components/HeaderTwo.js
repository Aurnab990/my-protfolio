import React from 'react';

const HeaderTwo = () => {
    return (
        <div className='lg:px-24'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-3xl ' src="https://media-exp2.licdn.com/dms/image/C5603AQHxyvVVcUhGfg/profile-displayphoto-shrink_800_800/0/1631775823378?e=1660176000&v=beta&t=6LQry4b7QcL6NoWy5VZf3IMaNaOsEwP3bLDALBKQeZk" class="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div className='bg-gradient-to-r from-base-400 to-indigo-500 rounded-3xl'>
                        <h1 class="text-5xl text-white font-bold font-sans ">Hi! my name is Aurnab</h1>
                        
                        <h1 class="text-3xl text-white font-semibold mt-4">a FullStack Web Developer</h1>
                        
                        <div className=' p-5 pl-24 lg:pl-44 flex gap-5'>
                        <button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">hire me</button>
                        <button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Download cv</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTwo;