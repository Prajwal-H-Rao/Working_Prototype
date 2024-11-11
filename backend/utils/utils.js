const fs = require('fs/promises');
const path  = require('path');

const constructTree = async (dir) => {
  const tree = {};

  const buildTree = async (currentDir, currentTree) => {
    const files = await fs.readdir(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        currentTree[file] = {};
        await buildTree(filePath, currentTree[file]);
      } else {
        currentTree[file] = null;
      }
    }
  };
  await buildTree(dir, tree);
  return tree;
};

module.exports={constructTree}