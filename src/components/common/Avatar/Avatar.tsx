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

const avatarsMapper = {
  'Viktoriia Vasylenko': viktoriiaVasylenko2021Avatar,
};

type AuthorProps = {
  name: AuthorNames;
};

const Author = ({ name }: AuthorProps) => {
  const Avatar = avatarsMapper[name];
  return (
    <div className="avatar-wrapper">
      <object
        className="avatar-object"
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export default Author;
