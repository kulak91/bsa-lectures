import React from 'react';
import Accordion from '../accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/pro-solid-svg-icons';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons';
import './VideoWrapper.css';

type VideoWrapperProps = {
  children: React.ReactNode;
  duration?: string;
};
const VideoWrapper = ({ children, duration = '00:00' }: VideoWrapperProps) => {
  return (
    <div className="video-wrapper">
      <Accordion>
        <Accordion.Header>
          <FontAwesomeIcon icon={faVideo} fixedWidth />
          <span className="title">
            <strong>{duration}</strong>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="iframe-wrapper">{children}</div>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};

export default VideoWrapper;
