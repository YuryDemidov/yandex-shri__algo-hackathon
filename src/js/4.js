function deepFirstTraverse(tree, treeArray = []) {
  treeArray.push(tree.value);

  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      deepFirstTraverse(tree.children[i], treeArray);
    }
  }

  return treeArray;
}

const TREE = {
  value: 4,
  children: [
    {
      value: 2,
      children: [
        {
          value: 1,
          children: []
        },
        {
          value: 3,
          children: []
        }
      ]
    },
    {
      value: 5,
      children: [
        {
          value: 6,
          children: []
        },
        {
          value: 7,
          children: []
        },
        {
          value: 8,
          children: []
        }
      ]
    }
  ]
};

console.log(deepFirstTraverse(TREE));
