import React from 'react';
import techerimg from '../assests/bookOne.png'

const TeacherDetails = () => {
    return (
        <div className='block lg:flex gap-5 lg:px-44 mt-5 lg:mt-24'>

            <img style={{ "width": "520px" }} src={techerimg} alt=''></img>
            <div>
                <h1 className='text-3xl text-white'>Eu-teachers-profile</h1>
                <p className='text-white'>Developed a react app for searching teachers’ email and phone numbers of Eastern university.
A student can search by teacher name for finding email and number

Technology: React, tailwind CSS.


                </p>
                <div className=' p-5 pl-24 lg:pl-28 flex gap-5'>
                    <button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github code</button>
                    <button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Live Site</button>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;