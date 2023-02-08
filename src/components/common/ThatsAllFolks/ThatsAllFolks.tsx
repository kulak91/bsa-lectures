import React, { useRef } from 'react';
import thatsAllFolksAudio from '~/assets/audio/thats-all-folks.mp3';

import './ThatsAllFolks.css';

const ThatsAllFolks = ({
  source,
  children,
}: {
  source?: string;
  children?: React.ReactNode;
}) => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const play = () => audio?.current?.play();
  const pause = () => audio?.current?.pause();

  return (
    <h4 className="thats-all-folks">
      <span onMouseEnter={play} onMouseLeave={pause}>
        {children || (
          <>
            <strong>
              <em>― That&apos;s all, folks!</em>
            </strong>{' '}
            🐷
          </>
        )}
      </span>
      <audio ref={audio} preload="auto">
        <source src={source || thatsAllFolksAudio} type="audio/mpeg" />
      </audio>
    </h4>
  );
};

export default ThatsAllFolks;
