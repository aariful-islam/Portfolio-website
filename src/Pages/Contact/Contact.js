import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k5it2vi', 'template_cdvu056', form.current, 'OVajB4DzpCG1tgnKU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div>
                <h1 className='text-center mt-4'>Contact Me</h1>
                

            </div>
            <div>
                <div>
                    <div>
                       

                        <div className='text-center'>
                            <h1>Address</h1>
                            <p className="text-center">3/2,Botanical garden staff quarter/mirpur-1,dhaka-1216</p>
                        </div>
                    </div>
                    <div>
                        <div>
                           
                        </div>

                        <div className='text-center'>
                            <h1>Email</h1>
                            <p className="text-center">mdarifulislam99050@gmail.com</p>
                        </div>
                    </div>
                    <div >
                        <div >
                            
                        </div>

                        <div className="text-center">
                            <h1>Phone</h1>
                            <p className="text-gray-300">+8801988599050</p>
                        </div>
                    </div>
                </div>
                <form className="lg:w-1/3" ref={form} onSubmit={sendEmail}>
                    <div className="text-center">
                        <input className="p-4 my-2 rounded text-xl" placeholder="Name" type="text" name="user_name" /><br />
                        <input className="p-4 my-2 rounded text-xl" placeholder="Email" type="email" name="user_email" /><br />
                        <textarea className="p-4 my-2 rounded text-xl" placeholder="Message" name="message" /><br />
                        <input className="btn btn-primary w-25" type="submit" value="Send" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;