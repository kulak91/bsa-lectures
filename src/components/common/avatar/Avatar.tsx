import React from 'react';
import { nameToImage } from './utils/name-to-image';
import { Author } from '~/data/homepage/lectures-list';

import './avatar.css';

type AvatarProps = {
  name: Author;
  className?: string;
};

const Avatar = ({ name, className }: AvatarProps) => {
  const Avatar = nameToImage[name];
  return (
    <div className="avatar-wrapper">
      <object
        className={`avatar-object ${className}`}
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export default Avatar;
