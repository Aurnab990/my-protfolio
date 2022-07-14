import React from 'react';
import { Link } from "react-router-dom";
import bookOne from '../assests/bookDetails.jpg';
import techerimg from '../assests/bookOne.png';

const Projects = () => {
    return (
        <div className='pl-8 lg:px-44 mt-5 lg:mt-12'>
            <h1 className='text-4xl text-white font-senibold p-12'>Some of my <span className='text-orange-500'>Projects</span> </h1>
            <progress class="progress w-56 mb:4"></progress>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 '>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src={bookOne} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Books House</h2>
                    <p>Developed a web app for purchasing the book and publishing the book.</p>
                    <div class="card-actions justify-end">
                        <Link to='/bookDetails'><button class="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src={techerimg} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">EU-Teacher's Profile</h2>
                    <p>Developed a react app for searching teachers’ email and phone numbers of Eastern university.
</p>
                    <div class="card-actions justify-end">
                    <Link to='/TeacherDetails'><button class="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110  duration-1000">
                <figure><img src="https://st2.depositphotos.com/5891300/9806/v/600/depositphotos_98065342-stock-illustration-rock-paper-scissors-hand-game.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Rock Paper Scissors</h2>
                    <p>Designed and developed a web game.</p>
                    <div class="card-actions justify-end">
                    <Link to='/rockpaper'><button class="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
        
        </div>
    );
};

export default Projects;