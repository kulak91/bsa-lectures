import React from 'react';
import { isDateInThePast } from '~/utils';

import { LecturesContext } from '~/types';
import { Footer, Header } from '~/components';

import './Lecture.scss';
import 'prismjs/themes/prism.css';

type LectureProps = {
  children: React.ReactNode;
  pageContext: LecturesContext;
};

const Lecture = ({
  children,
  pageContext: {
    frontmatter: { publishedAt, title },
  },
}: LectureProps) => {
  const isPublished = isDateInThePast(publishedAt);
  return (
    <>
      <div className="container grid-lg">
        <div className="columns">
          <div className="column">
            <Header />
            <article className="content">
              {isPublished ? (
                <>{children}</>
              ) : (
                <>
                  <h4>
                    — Пробач, але лекція <strong>«{title}»</strong> ще не
                    опублікована.
                  </h4>
                  <p>Заглянь сюди трішки пізніше, будь ласка.</p>
                </>
              )}
            </article>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lecture;
export { Head } from '~/components/head/Head';
