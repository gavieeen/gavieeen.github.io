import React, { useEffect } from 'react'
import { socialLinks } from '../constants'
import '../components/sparkle.css'
import '@fortawesome/fontawesome-free/css/all.css';


const Credits = () => {
    let start = new Date().getTime();
    let index = 0,
        interval = 1000;

    const originPosition = { x: 0, y: 0 };

    const last = {
        starTimestamp: start,
        starPosition: originPosition,
        mousePosition: originPosition
    }

    const config = {
        starAnimationDuration: 1500,
        minimumTimeBetweenStars: 250,
        minimumDistanceBetweenStars: 75,
        glowDuration: 75,
        maximumGlowPointSpacing: 10,
        colors: ["144, 10, 247", "252, 254, 255", "10, 194, 245"],
        sizes: ["1.4rem", "1rem", "0.6rem"],
        animations: ["fall-1", "fall-2", "fall-3"]
    }

    let count = 0;

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        selectRandom = items => items[rand(0, items.length - 1)];

    const animate = star => {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
    }

    useEffect(() => {
        for (const star of document.getElementsByClassName("magic-star")) {
            setTimeout(() => {
                animate(star);
                setInterval(() => animate(star), 1000);
            }, index++ * (interval / 3));
        }
    }, []);

    const withUnit = (value, unit) => `${value}${unit}`,
        px = value => withUnit(value, "px"),
        ms = value => withUnit(value, "ms");

    const calcDistance = (a, b) => {
        const diffX = b.x - a.x,
            diffY = b.y - a.y;

        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }

    const calcElapsedTime = (start, end) => end - start;

    const appendElement = element => document.body.appendChild(element),
        removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

    const createStar = position => {
        const star = document.createElement("span"),
            color = selectRandom(config.colors);

        star.className = "star fa-solid fa-star";

        star.style.left = px(position.x);
        star.style.top = px(position.y);
        star.style.fontSize = selectRandom(config.sizes);
        star.style.color = `rgb(${color})`;
        star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
        star.style.animationName = config.animations[count++ % 3];
        star.style.starAnimationDuration = ms(config.starAnimationDuration);

        appendElement(star);
        removeElement(star, config.starAnimationDuration);
    }

    const createGlowPoint = position => {
        const glow = document.createElement("div");

        glow.className = "glow-point";

        glow.style.left = px(position.x);
        glow.style.top = px(position.y);

        appendElement(glow)

        removeElement(glow, config.glowDuration);
    }

    const determinePointQuantity = distance => Math.max(
        Math.floor(distance / config.maximumGlowPointSpacing),
        1
    );

    const createGlow = (last, current) => {
        const distance = calcDistance(last, current),
            quantity = determinePointQuantity(distance);

        const dx = (current.x - last.x) / quantity,
            dy = (current.y - last.y) / quantity;

        Array.from(Array(quantity)).forEach((_, index) => {
            const x = last.x + dx * index,
                y = last.y + dy * index;

            createGlowPoint({ x, y });
        });
    }

    const updateLastStar = position => {
        last.starTimestamp = new Date().getTime();

        last.starPosition = position;
    }

    const updateLastMousePosition = position => last.mousePosition = position;

    const adjustLastMousePosition = position => {
        if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
            last.mousePosition = position;
        }
    };

    const handleOnMove = e => {
        const mousePosition = { x: e.clientX, y: e.clientY }

        adjustLastMousePosition(mousePosition);

        const now = new Date().getTime(),
            hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
            hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

        if (hasMovedFarEnough || hasBeenLongEnough) {
            createStar(mousePosition);
            updateLastStar(mousePosition);
        }

        createGlow(last.mousePosition, mousePosition);

        updateLastMousePosition(mousePosition);
    }

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);

    document.body.onmouseleave = () => updateLastMousePosition(originPosition);

    return (
        <section className='fixed dark-mode h-[100vh] w-full flex flex-col items-center'>
            <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
                A{" "}
                <span className="magic">
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-text">BIG THANK YOU</span>
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
                    href='https://codepen.io/cbracco'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Chris Bracco
                </a>
                <br />
                <a
                    href='https://www.svgrepo.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    SVG Repo
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
                <a
                    href='https://codepen.io/Hyperplexed'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                >
                    Hyperplexed
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