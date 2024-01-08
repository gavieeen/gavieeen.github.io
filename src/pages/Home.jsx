import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

import perfect from '../assets/perfect-time.mp3';
import aria from '../assets/aria-math.mp3';
import uta from '../assets/tabibito-no-uta.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
    const audioRef = useRef(new Audio(perfect));
    const audioRef2 = useRef(new Audio(aria));
    const audioRef3 = useRef(new Audio(uta));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    audioRef2.current.volume = 0.4;
    audioRef2.current.loop = true;
    audioRef3.current.volume = 0.4;
    audioRef3.current.loop = true;
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const [isPlayingMusic2, setIsPlayingMusic2] = useState(false);
    const [isPlayingMusic3, setIsPlayingMusic3] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
            audioRef2.current.pause();
            audioRef3.current.pause();
        } else if (isPlayingMusic2) {
            audioRef2.current.play();
            audioRef.current.pause();
            audioRef3.current.pause();
        } else if (isPlayingMusic3) {
            audioRef3.current.play();
            audioRef.current.pause();
            audioRef2.current.pause();
        }

        return () => {
            audioRef.current.pause();
            audioRef2.current.pause();
            audioRef3.current.pause();
        }
    }, [isPlayingMusic, isPlayingMusic2, isPlayingMusic3]);


    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={"w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}"}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 1, 1]} intensity={1} />
                    <ambientLight intensity={0.5} />
                    {/* <pointLight /> 
                    <spotLight /> */}
                    <hemisphereLight skyColor={"b1e1ff"} groundColor={"#000000"} intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            <div className='absolute bottom-1 left-12'>
                <img
                    src={isPlayingMusic3 ? soundon : soundoff}
                    alt='Play Music'
                    className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic3(!isPlayingMusic3)}
                />
            </div>
            <div className='absolute bottom-12 left-1'>
                <img
                    src={isPlayingMusic2 ? soundon : soundoff}
                    alt='Play Music'
                    className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic2(!isPlayingMusic2)}
                />
            </div>
            <div className='absolute bottom-1 left-1'>
                <img
                    src={isPlayingMusic ? soundon : soundoff}
                    alt='Play Music'
                    className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default Home