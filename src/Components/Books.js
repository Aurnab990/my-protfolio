import React from 'react';
import bookOne from '../assests/bookDetails.jpg';

const Books = () => {
    return (
        <div className='block lg:flex gap-5 lg:px-44 mt-5 lg:mt-24'>

            <img style={{ "width": "520px" }} src={bookOne} alt=''></img>
            <div>
                <h1 className='text-3xl text-white'>Books-House (Full-stack)</h1>
                <p className='text-white'>Developed a web app for purchasing the book and publishing the book.
                    An author can add their books easily. Can update price, and name easily later.
                    The authentication system is used for detecting particular user orders. And without login user can’t purchase anything.
                    Technology: React,tailwind CSS, react-router, firebase, express, MongoDB.

                </p>
                <div className=' p-5 pl-24 lg:pl-28 flex gap-5'>
                    <button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github code</button>
                    <button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Live Site</button>
                </div>
            </div>
        </div>
    );
};

export default Books;