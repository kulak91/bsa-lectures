const isEqual = (a1: number[], a2: number[]): boolean => {
  return JSON.stringify(a1) == JSON.stringify(a2);
};

export { isEqual };
