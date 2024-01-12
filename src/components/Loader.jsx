import React, { useEffect } from 'react'
import { Html } from '@react-three/drei'
import './loader.css'
import { preLoaderAnim } from "../animations";

const Loader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="loader">
      <div className="texts-container">
        <span style={{ color: '#00c6ff'  }}>Developer,</span>
        <span className='blue-gradient_text'>Dreamer,</span>
        <span style={{ color: '#6106c9' }}>Doer.</span>
      </div>
    </div>
  )
}

export default Loader