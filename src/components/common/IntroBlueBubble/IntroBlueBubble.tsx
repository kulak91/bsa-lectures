import React from 'react';
import { Avatar } from '~/components';
import { Author } from '~/data/homepage/lectures-list';

export type IntroBlueBubbleProps = {
  author: Author;
  about: string;
  title: string;
  subtitle: string;
  listItems: string[];
  footer: string;
};

const IntroBlueBubble = (props: IntroBlueBubbleProps) => {
  console.log('props', props);
  return (
    <div>
      <div className="author">
        <Avatar name={props.author} />
        <div className="profile">
          <h3 className="name">{props.author}</h3>
          <p className="about">{props.about}</p>
        </div>
      </div>
      <div className="bubble" style={{ margin: '-0.5em 1em 1em' }}>
        <strong>{props.title}</strong> 👋 <br />
        {props.subtitle}
        <ol className="compact inverted">
          {props.listItems.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
        <span
          style={{ display: 'inline-block' }}
          dangerouslySetInnerHTML={{ __html: props.footer }}
        />
      </div>
    </div>
  );
};

export default IntroBlueBubble;
