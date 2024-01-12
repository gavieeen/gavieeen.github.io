// import React from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Home, About, Projects, Contact, Credits } from './pages';
import Navbar from "./components/navbar";
import Loader from './components/Loader'

const App = () => {
    document.addEventListener("mousemove", function (e) {
        const isHomePage = window.location.pathname === '/'; // inside event listener so it doesn't occur on every page

        const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

        const posX = e.clientX;
        const posY = e.clientY;

        const pixel = document.createElement('canvas');
        const ctx = pixel.getContext('2d');

        ctx.width = ctx.height = 1;
        ctx.fillStyle = getComputedStyle(document.elementFromPoint(posX, posY)).backgroundColor;
        ctx.fillRect(0, 0, 1, 1);

        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

        const isLightBackground = (r + g + b) / 3 > 128; // Check if the background is light

        if (isHomePage) {
            // Change cursor color only on the homepage
            // console.log("Home Page");
            cursorDot.style.backgroundColor = '#521190';
            cursorDot.style.boxShadow = '0 0 10px rgba(82, 17, 144, 0.7)';

            cursorOutline.style.borderColor = 'rgba(82, 17, 144, 0.5)';
            cursorOutline.style.boxShadow = '0 0 20px rgba(82, 17, 144, 0.5)';

        } else {
            cursorDot.style.backgroundColor = isLightBackground ? 'black' : 'white';
            cursorDot.style.boxShadow = isLightBackground ? '0 0 10px rgba(0, 0, 0, 0.7)' : '0 0 10px rgba(255, 255, 255, 0.7)';

            cursorOutline.style.borderColor = isLightBackground ? 'rgba(0, 0, 0, 0.5)' : 'hsla(0, 0%, 100%, 0.5)';
            cursorOutline.style.boxShadow = isLightBackground ? '0 0 20px rgba(0, 0, 0, 0.5)' : '0 0 20px rgba(255, 255, 255, 0.5)';
        }

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" })
    });
    return (
        <>
        <Loader/>
        <main className="bg-slate-300/20 h-full"> {/* still need to see how changes play out on mobile */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
            </Router>
        </main>
        </>
    )
}

export default App