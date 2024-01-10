import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain animated-arrow'></img>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            <span className=' font-semibold text-xxl'>
                Hi, my name is{' '}
                <a
                    href='https://youtu.be/vGgUBmyzzRU'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-extrabold text-lg hover:underline'
                >
                    {'<'}Gavin Ebenezer! {'/>'}
                </a> 🤫🧏‍♂️
            </span>
            <br />
            I am an aspiring Software Developer studying Computer Science {'(₵$)'} at UIUC 🟦 🟧
            <br />
            <br />
            <br />
            <Link className='neo-brutalism-white neo-btn' style={{ fontSize: '16px' }}>
                Drag the Mouse, Swipe Your Fingers, or Hit the Arrow Keys to Move
                <img src={arrow} className='w-4 h-4 object-contain animated-arrow' alt='Arrow'></img>
            </Link>
        </h1>
    ),
    2: (
        <InfoBox
            text='I have acquired diverse skills, forged meaningful connections, and expanded my perspective throughout my workplace experiences.'
            link='/about'
            btnText='Learn More 🧑🏿‍💻'
        />
    ),
    3: (
        <InfoBox
            text="The projects I've worked on have fueled a passion for continual learning and development."
            link='/projects'
            btnText='Take a Look 👀'
        />
    ),
    4: (
        <InfoBox
            text="Looking for a dev? Want to talk? I'm just a hop, skip, and a few keystrokes away!"
            link='/contact'
            btnText="Let's Do It 🤝"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo