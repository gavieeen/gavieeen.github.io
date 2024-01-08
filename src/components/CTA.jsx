import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Have a Project in Mind? <br />
                Any Questions or Concerns? <br />
                Feel Free to Reach Out <br />
                <span className='underline'>Let's Build Something Great Together!</span>
                <div className="social-links flex justify-start items-start">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={link.iconUrl}
                                alt={link.name}
                                className="social-icon w-10 h-10 mx-1 my-2"
                            />
                        </a>
                    ))}
                </div>
            </p>
            <Link to='/contact' className='btn'>
                Contact Me
            </Link>
            {/* TODO: Include linkedin insta etc. */}
        </section>
    )
}

export default CTA