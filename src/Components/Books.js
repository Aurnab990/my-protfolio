import React from 'react';
import bookOne from '../assests/bookDetails.jpg';

const Books = () => {
    return (
        <div className='block lg:flex gap-5 lg:px-44 mt-5 lg:mt-24'>

            <img style={{ "width": "420px" }} src={bookOne} alt=''></img>
            <div>
                <h1 className='text-3xl font-bold  text-white'><span className='text-orange-500'>Books-House</span> (Full-stack)</h1>
                <p className='text-white text-xl'><li>Developed a web app for purchasing the book and publishing the book.</li>
                    <li>An author can add their books easily. Can update price, and name easily later.</li>
                    <li>The authentication system is used for detecting particular user orders. And without login user can’t purchase anything.</li>
                    Technology: React,tailwind CSS, react-router, firebase, express, MongoDB.

                </p>
                <div className=' p-5 pl-24 lg:pl-12 flex gap-3'>
                    <a target="blank" href="https://github.com/Aurnab990/books-house-client/tree/main/warehouse-management-client-side-Aurnab990"><button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github Client code</button></a>
                    <a target="blank" href="https://github.com/Aurnab990/books-house-server"> <button class="btn btn-outline btn-success transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Github Server code</button></a>
                    <br></br>
                    <a target="blank" href="https://mognoassesment.web.app/home"><button class="btn btn-outline btn-warning transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default Books;