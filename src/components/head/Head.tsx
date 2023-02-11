import React from 'react';
import { PageContext } from '~/types';
import { HeadFC } from 'gatsby';
import { useGetSiteMetadata } from '~/hooks/use-get-site-metadata';

const Head: HeadFC = ({ pageContext }: { pageContext?: PageContext }) => {
  const {
    description: defaultDescription,
    title: defaultTitle,
    author: defaultAuthor,
  } = useGetSiteMetadata();

  const seo = {
    title: pageContext?.frontmatter?.title || defaultTitle,
    description: pageContext?.frontmatter?.description || defaultDescription,
    author: pageContext?.frontmatter?.author || defaultAuthor,
    keywords: pageContext?.frontmatter?.keywords || [],
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:tittle" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="keywords"
        content={seo.keywords.length ? seo.keywords.join(', ') : ''}
      />
    </>
  );
};

export { Head };
