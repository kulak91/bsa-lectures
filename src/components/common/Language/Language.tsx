import React, { Component } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import './Language.css';

type LanguageProps = {
  currentLanguage: string;
  languages: Record<string, string>;
};
const Language = ({ languages, currentLanguage }: LanguageProps) => (
  <div className="lang-menu">
    <div>
      Translated into:
      {Object.keys(languages).map((language) =>
        currentLanguage === language ? (
          <div
            key={language}
            className={classNames('lang-option', {
              'is-active': currentLanguage === language,
            })}
          >
            {language.toUpperCase()}
          </div>
        ) : (
          <Link
            key={language}
            className={classNames('lang-option', {
              'is-active': currentLanguage === language,
            })}
            to={`/${languages[language]}`}
          >
            {language.toUpperCase()}
          </Link>
        ),
      )}
    </div>
  </div>
);

export default Language;
