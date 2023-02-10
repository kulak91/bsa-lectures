import { useStaticQuery, graphql } from 'gatsby';
import { ZipQueryQuery } from '~/types';

const useGetZipFiles = () => {
  const {
    allFile: { edges },
  } = useStaticQuery<ZipQueryQuery>(graphql`
    query ZipQuery {
      allFile(filter: { extension: { eq: "zip" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  return edges;
};

export { useGetZipFiles };
