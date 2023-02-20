import React from 'react';
import { isDateInThePast } from '~/utils';

import { LecturesContext } from '~/types';
import { Footer, Header } from '~/partials';

import './lecture.scss';
import 'prismjs/themes/prism.css';

type LectureProps = {
  children: React.ReactNode;
  pageContext: LecturesContext;
};

const Lecture: React.FC<LectureProps> = ({
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

export { Lecture };
