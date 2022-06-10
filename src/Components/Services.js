import React from 'react';

const Services = () => {
    return (
        <div className='pl-8 lg:px-44'>
            <h1 className='text-4xl text-white font-senibold p-12'>Expert in</h1>
            <progress class="progress w-56 mb:4"></progress>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 '>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src="https://initance.com/img/web-development-service.png" alt="Shoes" /></figure>
                <div class="card-body ">
                    <h2 class="card-title">SINGLE PAGE OR BUG FIXING</h2>
                    <p>Fixing small issues on existing web site or Design one static page.</p>
                    
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src="https://initance.com/img/web-development-service.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">DYNAMIC WEB SITE</h2>
                    <p>Developing professional web site or web application small / medium.</p>
                    
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src="https://initance.com/img/web-development-service.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">FULL STACK DEVELOPMENT</h2>
                    <p>Developing professional web site or Web Application medium / big.</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;