export const roundToTwoDecimals = (number: number): number =>
  +(Math.round(+(number + 'e+2')) + 'e-2');
