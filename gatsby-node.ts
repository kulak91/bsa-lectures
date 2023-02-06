import { createFilePath } from "gatsby-source-filesystem";
import { GatsbyNode } from "gatsby";

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value
      value: createFilePath({ node, getNode }),
    });
  }
};
