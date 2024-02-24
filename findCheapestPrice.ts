function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const adj = []
    for(let i = 0; i<n; i++){
        adj[i] = []
    }
    for(let [from, to, price] of flights){
        adj[from].push([to,price])
    }

     const pq = [[src, 0, k + 1]]
    while(pq.length){

        pq.sort((a, b) => a[1] - b[1])
        const [node, cost, stops] = pq.shift()
        if(node === dst) return cost
        if(stops > 0){
            for(const [next, price] of adj[node]){
                pq.push([next, cost + price, stops - 1])
            }
        }
    }
    return -1
 };

 function findCheapestPrice2(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const graph = new Map<number, [number, number][]>();
    for (const [from, to, price] of flights) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from)?.push([to, price]);
    }

    let cheapestPrice = Infinity;
    const queue: [number, number, number][] = [[src, 0, k + 1]];

    while (queue.length) {
        const [current, cost, stops] = queue.shift()!;
        if (current === dst) {
            cheapestPrice = Math.min(cheapestPrice, cost);
            continue;
        }

        if (stops > 0 && graph.has(current)) {
            for (const [next, price] of graph.get(current)!) {
                if (cost + price < cheapestPrice) {
                    queue.push([next, cost + price, stops - 1]);
                }
            }
        }
    }

    return cheapestPrice === Infinity ? -1 : cheapestPrice;
}

function findCheapestPrice3(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // Initialize prices array to store the cheapest prices from src to each city
      let prices = new Array(n).fill(Infinity);
      prices[src] = 0; // Set the price of the source city to 0

      let changed = true; // Flag to track if any updates were made in the current iteration

      // Iterate through the number of stops from src to dst, and stop early if no updates are made
      for (let stopI = 0; stopI <= k && changed; stopI++) {
          // Create a copy of the prices array to store the current iteration's cheapest prices
          const currPrices = Array.from(prices);
          changed = false; // Reset the flag at the beginning of each iteration

          // Iterate through each flight and update the cheapest prices for each destination city
          for (const [flightFrom, flightTo, flightPrice] of flights) {
              const newPrice = prices[flightFrom] + flightPrice; // Calculate the new price
              if (newPrice < currPrices[flightTo]) {
                  currPrices[flightTo] = newPrice; // Update the cheapest price if a better one is found
                  changed = true; // Update the flag if an update is made
              }
          }

          prices = currPrices; // Update prices array with the prices from the current iteration
      }

      // If there is no route from src to dst within k stops, return -1; otherwise, return the cheapest price
      return (prices[dst] === Infinity) ? -1 : prices[dst];
  };