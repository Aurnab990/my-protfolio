import React from 'react';
import techerimg from '../assests/bookOne.png'

const TeacherDetails = () => {
    return (
        <div className='block lg:flex gap-5 lg:px-44 mt-5 lg:mt-24'>

            <img style={{ "width": "520px" }} src={techerimg} alt=''></img>
            <div>
                <h1 className='text-3xl font-bold text-white'><span className='text-orange-500'>Eu-teachers-</span>profile</h1>
                <p className='text-white mt-5 lg:mt-8'><li>Developed a react app for searching teachers’ email and phone numbers of Eastern university.</li>
                    <li>A student can search by teacher name for finding email and number</li>

                    <h2 className='text-semibold text-xl mt-5'><span className='text-orange-600 text-xl'>Technology:</span> React, tailwind CSS.</h2>


                </p>
                <div className=' p-5 pl-24 lg:pl-28 flex gap-5'>
                    <a target="blank" href="https://github.com/Aurnab990/eu-profile-system"><button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github code</button></a>
                    <a target="blank" href="http://eu-teacher-profile.netlify.app"><button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;