import { Author } from '~/data/homepage/lectures-list';

type LecturesQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly fields: { readonly slug: string };
        readonly frontmatter: {
          readonly author: Author;
          readonly description: string;
          readonly duration: string;
          readonly title: string;
          readonly publishedAt: string;
        };
      };
    }>;
  };
};

type SiteMetaQuery = {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
      readonly description: string;
      readonly author: string;
    };
  };
};

export { LecturesQuery, SiteMetaQuery };
