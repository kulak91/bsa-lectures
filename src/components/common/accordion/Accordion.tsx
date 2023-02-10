import React from 'react';
import classnames from 'classnames';
import { AccordionProps, BodyProps, HeaderProps } from './types';

const Header = ({ children, ...props }: HeaderProps) => {
  const randomId = Math.random().toString(36);
  const { className, id = randomId } = props;
  const classNames = classnames('accordion-header', className);
  return (
    <React.Fragment>
      <input type="checkbox" id={id} hidden />
      <label className={classNames} htmlFor={id}>
        {children}
      </label>
    </React.Fragment>
  );
};

const Body = ({ children, ...props }: BodyProps) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion-body', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

const Accordion = ({ children, ...props }: AccordionProps) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};
Accordion.Body = Body;
Accordion.Header = Header;

export default Accordion;
