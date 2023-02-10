import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetaQuery } from '~/types';

const useGetSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetaQuery>(
    graphql`
      query Metadata {
        site(siteMetadata: {}) {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  return siteMetadata;
};

export { useGetSiteMetadata };
