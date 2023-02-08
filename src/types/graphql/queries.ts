import { Author } from '~/data/homepage/lectures-list';

export type LecturesQUery = {
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
