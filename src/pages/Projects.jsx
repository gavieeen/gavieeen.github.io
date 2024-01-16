import { Link } from "react-router-dom";

import CTA from '../components/CTA';
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
    window.onmousemove = null;
    window.ontouchmove = null;
    document.body.onmouseleave = null;
    return (
        <div className="relative inset-0 dark-mode z-0">
            <section className='max-container'>
                <h1 className='head-text'>
                    My{" "}
                    <span className='blue-gradient_text drop-shadow font-semibold'>
                        Projects
                    </span>
                </h1>

                <p className='text-slate-500 mt-2 leading-relaxed'>
                    Here are some of the projects I've worked on in recent years.
                    Many of them are open-source, so contributions are welcome.
                    If you have suggestions for improvements, don't hesitate to reach out.
                    I'm always eager to learn and enhance my skills!
                </p>

                <div className='flex flex-wrap my-20 gap-16'>
                    {projects.map((project) => (
                        <div className='lg:w-[400px] w-full' key={project.name}>
                            <div className='block-container w-12 h-12'>
                                <div className={`btn-back rounded-xl ${project.theme}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={project.iconUrl}
                                        alt={project.name}
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                            
                            <div className='mt-5 flex flex-col'>
                                <h4 className='text-2xl font-poppins font-semibold'>
                                    {project.name}
                                </h4>
                                <p className='mt-2 text-slate-500'>{project.description}</p>
                                <div className='mt-5 flex items-center gap-2 font-poppins'>
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-semibold text-blue-600'
                                    >
                                        Live Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt='arrow'
                                        className='w-4 h-4 object-contain animated-arrow'
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className='border-slate-200' />

                <CTA />
            </section>
        </div>
    );
};

export default Projects;