import React from 'react';
import {
  volodymyrKushnir2017Avatar,
  romanSahan2017Avatar,
  alexandrTovmach2018Avatar,
  pavelNemchenko2017Avatar,
  rostyslavDiakiv2018Avatar,
  nikitaKrasnov2018Avatar,
  kyryloLesohorskyi2020Avatar,
  LenchVolodymyr2021Avatar,
  oleksandrDanylchenko2021Avatar,
  viktoriiaVasylenko2021Avatar,
} from '~/assets/images/avatars/intro-rounded';
import { AuthorNames } from '~/enums';
import { Authors } from '~/data/homepage/lectures-list';
import './avatar.css';

const avatarsMapper = {
  [AuthorNames.VIKTORIIA_VASYLENKO_EN]: viktoriiaVasylenko2021Avatar,
  [AuthorNames.VIKTORIIA_VASYLENKO_UA]: viktoriiaVasylenko2021Avatar,
  [AuthorNames.OLEKSANDR_DANYLCHENKO_UA]: oleksandrDanylchenko2021Avatar,
};

type AuthorProps = {
  name: Authors;
  className?: string;
};

const Author = ({ name, className }: AuthorProps) => {
  const Avatar = avatarsMapper[name];
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

export default Author;
