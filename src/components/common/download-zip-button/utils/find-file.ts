type QueryNode = {
  name: string;
  publicURL: string;
};
type QueriedFile = {
  node: QueryNode;
};

const findFile = (fileName: string, nodes: QueriedFile[]) => {
  const file = nodes.find((node) => node.node.name === fileName);

  return file;
};

export { findFile };
