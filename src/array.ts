export const flat = <T>(lists: readonly T[][]): T[] => {
  return lists.reduce((pre, list) => {
    pre.push(...list);
    return pre;
  }, []);
};

export const first = <T>(
  lists: readonly T[],
  defaultValue: T | undefined | null = undefined
) => {
  return lists?.length > 0 ? lists[0] : defaultValue;
};

export const last = <T>(
  lists: readonly T[],
  defaultValue: T | undefined | null = undefined
) => {
  return lists?.length > 0 ? lists[lists.length - 1] : defaultValue;
};

export const boil = <T>(lists: readonly T[], cb: (a: T, b: T) => T) => {
  if (!lists || (lists.length ?? 0) == 0) return null;
  return lists.reduce(cb);
};

type Falsy = null | undefined | "" | 0;
export const sift = <T>(lists: readonly (T | Falsy)[]): T[] => {
  return (lists?.filter((x) => !!x) as T[]) ?? [];
};
