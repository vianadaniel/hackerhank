export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function isEvenOddTree(root: TreeNode | null): boolean {
    if (root === null) return false;

    const queue: TreeNode[] = [];
    queue.push(root);
    let level = -1;

    while (queue.length > 0) {
        level++;
        const size = queue.length;
        let prev = 0;

        for (let i = 0; i < size; i++) {
            const curr = queue.shift()!;

            if (level === 0 && curr.val % 2 === 0) {
                return false;
            }

            if (i === 0) {
                if ((level % 2 === 0 && curr.val % 2 === 1)
                    || (level % 2 === 1 && curr.val % 2 === 0)
                ) {
                    prev = curr.val;
                } else {
                    return false;
                }
            } else {
                if (level % 2 === 1) {
                    if (curr.val % 2 === 0 && prev > curr.val) {
                        prev = curr.val;
                    } else {
                        return false;
                    }
                } else {
                    if (curr.val % 2 === 1 && prev < curr.val) {
                        prev = curr.val;
                    } else {
                        return false;
                    }
                }
            }

            if (curr.left !== null) {
                queue.push(curr.left);
            }

            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
    }

    return true;
}

// Testes
// Função para montar a árvore a partir da lista de valores
function buildTree(values: (number | null)[]): TreeNode | null {
    if (values.length === 0) return null;

    const root = new TreeNode(values[0] as number);
    const queue: TreeNode[] = [root];
    let index = 1;

    while (index < values.length) {
        const node = queue.shift()!;

        const leftVal = values[index++];
        if (leftVal !== null) {
            node.left = new TreeNode(leftVal);
            queue.push(node.left);
        }

        if (index < values.length) {
            const rightVal = values[index++];
            if (rightVal !== null) {
                node.right = new TreeNode(rightVal);
                queue.push(node.right);
            }
        }
    }

    return root;
}

// Lista de valores para a árvore
const values = [1,10,4,3,null,7,9,12,8,6,null,null,2];

// Montar a árvore
const root = buildTree(values);
console.log(root);
// Exemplo de como acessar os nós da árvore
if (root) {
    console.log(root.val); // Deve imprimir 1
    if (root.left) console.log(root.left.val); // Deve imprimir 10
    if (root.right) console.log(root.right.val); // Deve imprimir 4
}

console.log(isEvenOddTree(root)); // Deve retornar true

const root2 = new TreeNode(5);
root2.left = new TreeNode(4);
root2.right = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(3);
root2.right.left = new TreeNode(7);
console.log(isEvenOddTree(root2)); // Deve retornar false
