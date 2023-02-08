import { useStaticQuery, graphql } from 'gatsby';
import { LecturesQUery } from '~/types/graphql/queries';

export const useGetLectures = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<LecturesQUery>(
    graphql`
      query MyQuery {
        allMdx(
          sort: { frontmatter: { orderId: ASC } }
          filter: { frontmatter: { hiddenFromMainPage: { eq: false } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                author
                description
                duration
                title
                publishedAt
              }
            }
          }
        }
      }
    `,
  );
  return edges;
};
