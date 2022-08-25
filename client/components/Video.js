import Webcam from 'react-webcam';

import React, { useEffect, useRef } from 'react';

function Video() {
  const FPS = 3;
  const WS_URL = 'wss://reachout-gesture-api.herokuapp.com/get_gesture';
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    return JSON.stringifyimageSrc;
  };

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    ws.onopen = () => {
      console.log(`Connected to ${WS_URL}`);
      setInterval(() => {
        ws.send(capture());
      }, 1000 / FPS);
    };
    let rec = -1;
    ws.onmessage = (msg) => {
      console.log(msg);
      let prev = rec;
      rec = Number(msg.data);

      if (prev === rec) {
        console.log('Previous equal rec');
      } else {
        console.log('Previous not equal rec');
      }
    };
  }, []);
  return (
    <div class="floating-videoCam">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
    </div>
  );
}

export default Video;
