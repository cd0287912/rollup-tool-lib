type TreeNode<T> = {
  [P in keyof T]: T[P];
} & {
  children: TreeNode<T>[];
  id: string;
};

export function findTreePath<T>(
  tree: readonly TreeNode<T>[],
  id: string,
  path: TreeNode<T>[] = []
): null | TreeNode<T>[] {
  for (const item of tree) {
    if (item.id === id) {
      return [...path, item];
    }
    if (item.children && item.children.length > 0) {
      const result = findTreePath(item.children, id, [...path, item]);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

export function flatTree<T>(tree: readonly TreeNode<T>[]) {}
