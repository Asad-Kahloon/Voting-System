import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './webcam.css'

const WebCam = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setScreenshot(imageSrc);
    }
  };

  return (
    <div className='webCam container align-items-center'>
      <Webcam className='camera'
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
      />
      <canvas className='image col-md-6'
        ref={canvasRef}
        style={{ display: 'none' }}
        height={600}
      />
      <a 
        download="auth.jpg"
        href={screenshot}
        onClick={capture}
      >
         <button className='camera-btns'>
        Click Me
        </button>
      </a>
    </div>
  );
};

export default WebCam;