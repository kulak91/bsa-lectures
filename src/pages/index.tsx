import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { funPlus, isDateInThePast } from '~/utils';
import { lectureList } from '~/data/homepage/lectures-list';

import '~/assets/styles/index.css';
import classNames from 'classnames';
import { Avatar } from '~/components';
import { AuthorNames } from '~/enums';

console.log(funPlus);
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: 'TypeScript Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
    color: '#8954A8',
  },
  {
    text: 'GraphQL Typegen Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/',
    color: '#8954A8',
  },
];

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative' as 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800',
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8',
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: '#BC027F',
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399',
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          {/* <Header /> */}
          <article>
            <div className="hero">
              <div className="hero-body text-center">
                <div>
                  <strong>
                    — Hey, привіт, привет{' '}
                    <span className="waving-hand">👋</span>!
                  </strong>{' '}
                  Це — лекції другого етапу для
                </div>
                <h1 className="mainpage-link">
                  <a
                    href="https://academy.binary-studio.com/"
                    title="Binary Studio Academy"
                  >
                    <svg
                      className="logo"
                      viewBox="0 0 105 99"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M44.9269232,62.8812382 C45.1942077,63.4971831 44.4998288,64.0859815 43.937223,63.7190356 L14.3088315,44.3757436 C12.0499973,43.0773915 12.565875,40.6042509 14.3088315,39.8497652 L30.8944879,33.724951 C31.5430733,33.4853129 32.2645545,33.7942214 32.5411846,34.427952 L44.9269232,62.8812382 Z"
                          fill="#FFC712"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M72.1925572,59.2141192 L53.9994557,67.0903512 C52.8396654,67.5930297 51.4527766,66.9649156 50.8995165,65.6880936 L27.463527,11.5645066 C26.9093323,10.2848763 27.4027806,8.83862262 28.5653746,8.33500806 L46.7575415,0.458776008 C47.9182665,-0.0429663717 49.3060897,0.584211603 49.8593499,1.86103363 L73.2953393,55.9846206 C73.8485995,57.2642509 73.3551513,58.7105046 72.1925572,59.2141192"
                          fill="#00ADEE"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M24.6823666,16.0343198 C25.9608462,18.9343158 28.8953681,25.7377927 30.0420746,28.401895 C30.3009481,29.0000543 30.0046922,29.68995 29.3962929,29.9183552 L16.7171021,34.6746108 C16.1582345,34.8833581 15.622731,34.319834 15.8582404,33.7712873 L23.4908011,16.0408724 C23.7160304,15.5194722 24.4533991,15.5138557 24.6823666,16.0343198"
                          fill="#EC1848"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L1.88356093,65.7216991 C1.47983053,66.6456165 2.41439165,67.5863835 3.33867261,67.1866745 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                          fill="#EC1848"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L19.2617251,60.2961416 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                          fill="#C22035"
                          transform="translate(15 14)"
                        />
                      </g>
                    </svg>
                    <strong>Binary Studio Academy</strong>
                  </a>
                </h1>
                <p>
                  — щорічного літнього безкоштовного онлайн-інтенсиву з розробки
                  веб-додатків.
                </p>
              </div>
            </div>
            <div className="columns">
              {lectureList
                .filter((lecture) => !lecture.hiddenFromMainPage)
                .map(
                  (
                    {
                      author,
                      avatar,
                      description,
                      duration,
                      link,
                      title,
                      publishedAt,
                    },
                    index,
                  ) => {
                    const lectureTitle = (
                      <h2 className="lecture-title">
                        <span>
                          <strong>{title}</strong>
                        </span>
                      </h2>
                    );
                    const isPublished = isDateInThePast(publishedAt);
                    return (
                      <div key={link} className="column col-6 col-sm-12">
                        <div
                          className={classNames('panel', 'lecture-panel', {
                            disabled: !isPublished,
                          })}
                        >
                          <div className="panel-header">
                            {isPublished ? (
                              <Link to={link} title={title}>
                                {lectureTitle}
                              </Link>
                            ) : (
                              lectureTitle
                            )}
                          </div>
                          <div className="panel-body">
                            <span
                              dangerouslySetInnerHTML={{ __html: description }}
                            />
                          </div>
                          <div className="panel-footer">
                            <div className="lecture-meta">
                              <div className="lecture-author">
                                <Avatar
                                  name={avatar}
                                  className={'avatar-large'}
                                />
                                <div className="lecture-author-name">
                                  {author}
                                </div>
                              </div>
                              {duration && (
                                <span className="lecture-duration text-gray">
                                  <small>{duration}</small>
                                </span>
                              )}
                            </div>
                            {
                              <span className="lecture-number text-gray">
                                <small>#{index + 1}</small>
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                    );
                  },
                )}
            </div>
          </article>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          — you just made a Gatsby site! 🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
        page update in real-time. 😎
      </p>
      <ul style={doclistStyles}>
        {docLinks.map((doc) => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul style={listStyles}>
        {links.map((link) => (
          <li
            key={link.url}
            style={{
              ...listItemStyles,
              color: link.color,
            }}
          >
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
