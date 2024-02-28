export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function depth(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        diameter = Math.max(diameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);

    return diameter;
}


// Create a binary tree
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

// Test cases
console.log(diameterOfBinaryTree(tree)); // Expected output: 3

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);

console.log(diameterOfBinaryTree(tree2)); // Expected output: 5

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.left.left = new TreeNode(4);
tree3.left.right = new TreeNode(5);
tree3.right.right = new TreeNode(6);
tree3.left.right.left = new TreeNode(7);
tree3.left.right.right = new TreeNode(8);

console.log(diameterOfBinaryTree(tree3)); // Expected output: 6
