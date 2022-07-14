import React from 'react';

const Rockpaper = () => {
    return (
        <div className='block lg:flex gap-5 lg:px-44 mt-5 lg:mt-24'>

            <img style={{ "width": "520px" }} src="https://st2.depositphotos.com/5891300/9806/v/600/depositphotos_98065342-stock-illustration-rock-paper-scissors-hand-game.jpg" alt=''></img>
            <div>
                <h1 className='text-3xl font-bold text-white'><span className='text-orange-500'>Rock-Paper</span>-Scissors</h1>
                <p className='text-white mt-5 lg:mt-8'><li>Designed and developed a web game.
</li>
                    <li>The user will choose one and also the machine will choose one, then compare the logic its shows the result. 
</li>

                    <h2 className='text-semibold text-xl mt-5'><span className='text-orange-600 text-xl'>Technology:</span> Javascript and HTML,CSS.</h2>


                </p>
                <div className=' p-5 pl-24 lg:pl-28 flex gap-5'>
                    <a target="blank" href="https://github.com/Aurnab990/rock-paper-sizer-game"><button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github code</button></a>
                    <a target="blank" href="https://rock-paper-sizer-1-00-1.netlify.app/"><button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default Rockpaper;