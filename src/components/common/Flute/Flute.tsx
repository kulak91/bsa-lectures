import React, { useRef } from 'react';
import rodrigoRodriguezShakuhachiFluteAudio from '~/assets/audio/rodrigo-rodriguez-shakuhachi-flute.mp3';
import './Flute.css';

const Flute = () => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const play = () => audio?.current?.play();
  const pause = () => audio?.current?.pause();
  return (
    <div
      className="message__scene message__scene-flute"
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <em>(in the distance, a Japanese flute plays a gentle melody)</em>
      <audio ref={audio} preload="auto">
        <source src={rodrigoRodriguezShakuhachiFluteAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Flute;
