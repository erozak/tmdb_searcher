type Words = number;
type Scale = number;
type Boundary = [Words, Scale];

export default function getTitleFontSizeScale(length: number): number {
  const minScale = 0.375;
  /* tslint:disable:no-magic-numbers */
  const boundaries: Boundary[] = [
    [20, 1],
    [23, 0.875],
    [40, 0.75],
    [65, 0.625],
    [101, 0.5],
  ];
  /* tslint:enable */

  const boundary = boundaries.find(([words]) => length <= words);

  if (boundary) {
    return boundary[1];
  }

  return minScale;
}
