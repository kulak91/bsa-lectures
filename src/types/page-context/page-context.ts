type Meta = {
  author: string;
  orderId: number;
  title: string;
  duration: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

type PageContext = {
  frontmatter: Meta;
};

export { PageContext };
