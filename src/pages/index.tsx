import * as React from 'react';
import { PageProps } from 'gatsby';
import { Footer, Header, LecturesGrid, LogoLink } from '~/components';

import '~/assets/styles/index.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
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
                <LogoLink />
                <p>
                  — щорічного літнього безкоштовного онлайн-інтенсиву з розробки
                  веб-додатків.
                </p>
              </div>
            </div>
            <LecturesGrid />
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export { Head } from '~/components';
