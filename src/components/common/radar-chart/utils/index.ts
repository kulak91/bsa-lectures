const roundToTwoDecimals = (number: number) =>
  +(Math.round(+(number + 'e+2')) + 'e-2');

const isEqual = (a1: number[], a2: number[]) => {
  return JSON.stringify(a1) == JSON.stringify(a2);
};

export { roundToTwoDecimals, isEqual };
