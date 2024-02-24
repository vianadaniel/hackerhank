// You are given an integer n indicating there are n people numbered from 0 to n - 1.
// You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei]
// indicates that person xi and person yi have a meeting at timei.
// A person may attend multiple meetings at the same time.
// Finally, you are given an integer firstPerson.

// Person 0 has a secret and initially shares the secret with a person firstPerson at time 0.
// This secret is then shared every time a meeting takes place with a person that has the secret.
// More formally, for every meeting, if a person xi has the secret at timei,
// then they will share the secret with person yi, and vice versa.

// The secrets are shared instantaneously. That is, a person may receive the secret and share it
// with people in other meetings within the same time frame.

// Return a list of all the people that have the secret after all the meetings have taken place.
// You may return the answer in any order.



function find_all_people_with_secret(
    n: number,
    meetings: number[][],
    firstPerson: number
  ): number[] {
    const secrets = new Set([0, firstPerson]); // Set containing person 0 and firstPerson
    const time_map = {}; // Object to store meeting information

    // Populate time_map with meeting information
    for (let [src, dst, t] of meetings) {
      if (!time_map[t]) time_map[t] = {}
      if (!time_map[t][src]) time_map[t][src] = []
      if (!time_map[t][dst]) time_map[t][dst] = []

      time_map[t][src].push(dst);
      time_map[t][dst].push(src);
    }

    // Depth-first search function
    function dfs(src, adj, visit) {
      if (visit.has(src)) return

      visit.add(src);
      secrets.add(src);

      for (let neighbour of adj[src]) {
        dfs(neighbour, adj, visit);
      }
    }

    // Iterate over keys of time_map
    for (let t of Object.keys(time_map)) {
      let visit = new Set(); // Set to track visited people
      // Iterate over people with meetings at time t
      for (let src in time_map[t]) {
        if (secrets.has(Number(src))) {
          dfs(Number(src), time_map[t], visit); // Perform DFS starting from src
        }
      }
    }

    return Array.from(secrets); // Convert set to array and return
  }

  // Test the function
  const n = 6;
  const meetings = [
    [1, 2, 5],
    [2, 3, 8],
    [1, 5, 10],
  ];
  const firstPerson = 0; // Start with person 0
  console.log(find_all_people_with_secret(n, meetings, firstPerson)); // Output: [0, 1, 2, 3, 5]