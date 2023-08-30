export const pipe =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T>(...fns: any[]) =>
    (value: T) =>
      fns.reduce((acc, fn) => fn(acc), value);
