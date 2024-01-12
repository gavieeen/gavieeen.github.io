import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { socialLinks } from '../constants';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('walk.left');

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send( // asynchronous operation so we need to call a .then
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Gavin',
                from_email: form.email,
                to_email: 'gavinebenezer@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            setForm({ name: "", email: "", message: "" })
            showAlert({ show: true, text: 'Message Sent Successfully!', type: 'success' })

            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('walk.left');
            }, [3000])
        }).catch((error) => {
            setIsLoading(false)
            setCurrentAnimation('idle')
            showAlert({ show: true, text: 'Message Failed to Send, Please Try Again', type: 'danger' })
        })
    };
    const handleFocus = () => setCurrentAnimation('hit');
    const handleBlur = () => setCurrentAnimation('walk');

    return (
        <div className="relative inset-0 dark-mode z-0">
            <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
                {alert.show && <Alert {...alert} />}
                <div className='flex-1 min-w-[50%] flex flex-col'>
                    <h1 className='head-text'>Get in Touch</h1>

                    <form
                        className='w-full flex flex-col gap-7 mt-14'
                        onSubmit={handleSubmit}
                    >
                        <label className="text-black-500 font-semibold">
                            Name
                            <input
                                type='text'
                                name='name'
                                className='input'
                                placeholder='Ice Spice'
                                required
                                value={form.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className="text-black-500 font-semibold">
                            Email
                            <input
                                type='email'
                                name='email'
                                className='input'
                                placeholder='icespicenice@example.com'
                                // required
                                value={form.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className="text-black-500 font-semibold">
                            Your Message
                            <textarea
                                name='message'
                                rows={4}
                                className='textarea'
                                placeholder="You thought I was feelin' you? 💅"
                                required
                                value={form.message}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <button
                            type='submit'
                            className='btn'
                            disabled={isLoading}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {isLoading ? 'Sending . . . 🚀' : "Send 🚀"}
                        </button>
                    </form>
                    <div className="social-links flex justify-emd items-end">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={link.iconUrl}
                                    alt={link.name}
                                    className="social-icon w-20 h-20 mx-20 my-20"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000
                        }}
                    >
                        <directionalLight intensity={2.5} position={[0, 0, 1]} />
                        <ambientLight intensity={0.5} />

                        <Fox
                            currentAnimation={currentAnimation}
                            position={[.5, 0.35, 0]}
                            rotation={[12.6, -.6, 0]}
                            scale={[0.69, 0.69, 0.69]}
                        />

                    </Canvas>
                </div>
            </section>
        </div>
    )
}

export default Contact