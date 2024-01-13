import React from 'react'
import { socialLinks } from '../constants'

const Credits = () => {
    return (
        <section className='dark-mode h-[100vh] w-full flex flex-col items-center'>
            <h1 className='head-text'>
                A{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    BIG THANK YOU
                </span>
                {' '}
                to:
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed text-center'>
                <a
                    href='https://www.youtube.com/@javascriptmastery'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Javascript Mastery
                </a>
                <br />
                <a
                    href='https://codepen.io/MasterChief'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Quentin Luylier
                </a>
                <br />
                <a
                    href='iconstudio.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Icon Studio
                </a>
                <br />
                <a
                    href='thenounproject.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    The Noun Project
                </a>
                <br />
                <a
                    href='https://www.youtube.com/@GreatStackDev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    GreatStack
                </a>
                <br />
                <a
                    href='https://www.youtube.com/@sharmil_adroja'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Sharmil Adroja
                </a>
                <br />
                My Family
                <br />
                My Friends
            </p>
            <div className="social-links flex justify-emd items-end bottom-5">
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
        </section>
    )
}

export default Credits