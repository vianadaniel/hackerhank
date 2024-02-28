/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function findBottomLeftValue(root: TreeNode | null): number {
    if (!root) {
        return null;
    }

    // Queue for level order traversal
    const queue: TreeNode[] = [root];
    // Initialize with null value
    let bottomLeftValue: number | null = null;

    // Level order traversal
    while (queue.length > 0) {
        const levelSize = queue.length;
        // Process nodes at current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            // For the first node in the level, update bottomLeftValue
            if (i === 0) {
                bottomLeftValue = node.val;
            }
            // Add child nodes to the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return bottomLeftValue;
};

// Test cases
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log(findBottomLeftValue(root1)); // Output: 1

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.right.left = new TreeNode(5);
root2.right.right = new TreeNode(6);
root2.right.left.left = new TreeNode(7);
console.log(findBottomLeftValue(root2)); // Output: 7
