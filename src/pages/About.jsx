import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'

import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
    window.onmousemove = null;
    window.ontouchmove = null;
    document.body.onmouseleave = null;
    return (
        <div className="relative inset-0 dark-mode z-0">
            <section className="max-container">
                <h1 className="head-text blue-gradient_text">
                    Hello, I'm{" "}
                    <span className='blue-gradient_text font-semibold drop-shadow'>
                        {" "}
                        <a
                            href='https://youtu.be/vGgUBmyzzRU'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:underline'
                        >
                            <div className="glitch" data-text="GAVIN!">GAVIN!</div>
                        </a>
                        <br />
                        {"( 。・_・。)人(。・_・。 )"}
                    </span>{" "}
                </h1>

                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        As an aspiring software engineer and law student based in the United States,
                        my journey unfolds at the intersection of technology and justice, with an enthusiasm
                        for game development, web development, machine learning, neural networks, animation, law, and policy.
                        Committed to ceaseless learning, I aspire to leverage my skills to impact the world positively.
                    </p>
                </div>

                <div className='py-10 flex flex-col'>
                    <h3 className='subhead-text'>My Skills</h3>

                    <div className='mt-16 flex flex-wrap gap-12'>
                        {skills.map((skill) => (
                            <>
                                <div className='block-container w-20 h-20' key={skill.name} data-tooltip={skill.name}>
                                    <div className='btn-back rounded-xl' title={skill.name} />
                                    <div className='btn-front rounded-xl flex justify-center items-center'>
                                        <img
                                            src={skill.imageUrl}
                                            alt={skill.name}
                                            className='w-1/2 h-1/2 object-contain'
                                        /> {/* TODO: add tooltip element */}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className='py-16'>
                    <h3 className='subhead-text'>Work Experience</h3>
                    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                        <p>
                            I've contributed to various companies where I've leveled up my skills
                            and collaborated with brilliant minds. Here's a snapshot of my professional journey:
                        </p>
                    </div>

                    <div className='mt-12 flex'>
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    icon={<div className=' flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>}
                                    iconStyle={{ background: experience.iconBg }}
                                    contentStyle={{
                                        borderBottom: '8px',
                                        borderStyle: 'solid',
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: 'none'
                                    }}
                                >
                                    <div>
                                        <h3 className='text-black text-xl font-poppins font-semibold'>
                                            {experience.title}
                                        </h3>
                                        <p
                                            className='text-black-500 font-medium text-base'
                                            style={{ margin: 0 }}
                                        >
                                            {experience.company_name}
                                        </p>
                                    </div>

                                    <ul className='my-5 list-disc ml-5 space-y-2'>
                                        {experience.points.map((point, index) => (
                                            <li key={'experience-point-${index}'} className='text-black-500/50 font-normal pl-1 text-sm'>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>

                <hr className='border-slate-200' />

                <CTA />
            </section>
        </div>
    )
}

export default About