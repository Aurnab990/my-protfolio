import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ialp0dp', 'template_bwqvr4l', form.current, 'ZX_Q7Be8tnrilT88I')
            .then((result) => {
                console.log(result.text);
               alert("Message Sent, Aurnab Will reply you soon");
            }, (error) => {
                console.log(error.text);
            });
    };
    /*
    <h1 className='text-4xl text-white font-senibold p-12'><span className='text-orange-500'>Contact</span> Me</h1>
            <input type="text" placeholder="Your name" class="input input-bordered input-primary w-full max-w-xs" />
            <br></br>
            <br></br>
            <input type="email" placeholder="Your email" class="input input-bordered input-primary w-full max-w-xs" />
            <br></br>
            <br></br>
            <textarea class=" w-full max-w-xs max-h-xl textarea textarea-warning" placeholder="Message"></textarea>
            <br></br>


            <div className=''>
                <button class="w-1/4 btn btn-outline btn-warning  justify-center mt-5 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400">Submit</button>

            </div>
    */
    return (
        <div className='mt-10'>
             <h1 className='text-4xl text-white font-senibold p-12'><span className='text-orange-500'>Contact</span> Me</h1>
             <div className='grid grid-cols-3 pl-5 gap-0'>
             
                <div className=''>
                <img style={{"width":"56px"}} src='https://icon-library.com/images/home-address-icon/home-address-icon-21.jpg'></img>
                
                </div>
            
            <form className='' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" placeholder="Your name" class="input input-bordered input-primary w-full max-w-xs" name="message" />
                <br></br>
                <br></br>
                <label>Email</label>
                <input type="email" placeholder="Your email" class="input input-bordered input-primary w-full max-w-xs" name="message" />
                <br></br>
                <br></br>
                <label>Message</label>
                
                <textarea  class=" w-full max-w-xs max-h-xl textarea textarea-warning" placeholder="Message" name="message" />
                
                <br></br>
            
               <div className='pl-24 pr-8'>
               <input type="submit" class="w-full btn btn-outline btn-warning  justify-center mt-5 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400" value="Send" />
               </div>
            </form>
            </div>
            
        </div>
    );
};

export default Contact;