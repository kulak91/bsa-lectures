import React from 'react';
// import PropTypes from "prop-types";
import classNames from 'classnames';
import './FacebookMessage.css';

type Props = {
  children: React.ReactNode;
  small: boolean;
  subtle: boolean;
};

const FacebookMessage = ({ children, small, subtle }: Props) => {
  return (
    <div
      className={classNames('bubble', {
        small: small,
        subtle: subtle,
      })}
    >
      {children}
    </div>
  );
};

export default FacebookMessage;
