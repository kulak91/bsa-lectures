import React from 'react';
import { isDateInThePast } from '~/utils';
// import { SEO, Header, Footer, ShrugMessage } from "..";
// import { isDateInThePast } from "../../utils";

import { Footer } from '~/components';

import './Lecture.scss';
import 'prismjs/themes/prism.css';

type Meta = {
  author?: string;
  orderId: number;
  title: string;
  duration?: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

type FrontMatter = {
  frontmatter: Meta;
};
type LectureProps = {
  children: React.ReactNode;
  pageContext: FrontMatter;
};

const Lecture = ({
  children,
  pageContext: {
    frontmatter: {
      description,
      hiddenFromMainPage,
      keywords,
      orderId,
      publishedAt,
      title,
      author,
      duration,
    },
  },
}: LectureProps) => {
  const isPublished = isDateInThePast(publishedAt);
  return (
    <>
      <div className="container grid-lg">
        <div className="columns">
          <div className="column">
            {/* <Header /> */}
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
