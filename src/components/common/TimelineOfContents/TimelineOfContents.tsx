import React from 'react';
import './styles.css';

type Timeline = {
  linkTo: string;
  title: string;
  time?: string;
};

export type TimeLineProps = {
  headerTitle?: string;
  headerClass?: string;
  timeline: Timeline[];
};

const TimelineOfContents = ({
  timeline = [],
  headerClass,
  headerTitle,
  ...rest
}: TimeLineProps) => (
  <div id="table-of-contents" className={`table-of-contents ${headerClass}`}>
    {headerTitle && (
      <h2>
        <strong>{headerTitle}</strong>
      </h2>
    )}
    <ul className="step" {...rest}>
      {timeline.map(({ linkTo, title, time }, index) => (
        <li key={`timeline-item-${index}`} className="step-item">
          {time && (
            <div className="step-time">
              <small>{time}</small>
            </div>
          )}
          <a
            href={linkTo}
            className="step-level"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default TimelineOfContents;
