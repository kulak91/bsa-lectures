import React from "react";
// import { SEO, Header, Footer } from "..";

type Meta = {
  title: string;
  description: string;
  keywords: string[];
};
type PageProps = {
  children: React.ReactNode;
  metadata: Meta;
};
const Page = ({
  children,
  metadata: { title, description, keywords },
}: PageProps) => (
  <>
    {/* <SEO
      title={title}
      description={description.replace(/<(?:.|\n)*?>/gm, "")}
      keywords={keywords}
    /> */}
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          {/* <Header /> */}
          <article className="content">{children}</article>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  </>
);

export default Page;
