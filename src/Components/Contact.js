import React from 'react';

const Contact = () => {
    return (
        <div>
            Your Email: <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            <br></br>
            Message: <textarea class=" w-full max-w-xs max-h-xl textarea textarea-warning" placeholder="Bio"></textarea>
        </div>
    );
};

export default Contact;