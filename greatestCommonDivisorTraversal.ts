function canTraverse(nums: number[]): boolean {
    const n = nums.length;
    const graph = new Map<number, number[]>();

    // Função para adicionar uma aresta no grafo
    function addEdge(u: number, v: number) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u)!.push(v);
    }

    // Função para obter todos os fatores primos de um número
    function getPrimeFactors(num: number): number[] {
        const factors = new Set<number>();
        for (let i = 2; i * i <= num; i++) {
            while (num % i === 0) {
                factors.add(i);
                num /= i;
            }
        }
        if (num > 1) factors.add(num);
        return Array.from(factors);
    }

    // Criando conexões com base nos fatores primos
    const primeToIndex = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        const factors = getPrimeFactors(nums[i]);
        for (const factor of factors) {
            if (primeToIndex.has(factor)) {
                addEdge(primeToIndex.get(factor)!, i);
                addEdge(i, primeToIndex.get(factor)!);
            }
            primeToIndex.set(factor, i);
        }
    }

    // Busca em profundidade (DFS) para verificar a conectividade
    const visited = new Array(n).fill(false);
    function dfs(node: number) {
        visited[node] = true;
        for (const neighbor of graph.get(node) || []) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // Inicia o DFS a partir do primeiro índice
    dfs(0);

    // Verifica se todos os índices foram visitados
    return visited.every(v => v);
}

// Testes
console.log(canTraverse([2, 3, 6])); // Saída: true
console.log(canTraverse([3, 9, 5])); // Saída: false
console.log(canTraverse([4, 3, 12, 8])); // Saída: true
console.log(canTraverse([2, 4, 8])); // Saída: true
console.log(canTraverse([2, 4, 9])); // Saída: false
console.log(canTraverse([2, 4, 16])); // Saída: true
console.log(canTraverse([3, 5, 7])); // Saída: true
