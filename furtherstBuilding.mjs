function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    /**
     * @see https://github.com/datastructures-js/priority-queue/tree/v4.1.0
     */
    const queue = new MaxPriorityQueue();

    let i = 1;

    for (; i < heights.length; i++) {
        const neededBricks = heights[i] - heights[i - 1];

        if (neededBricks <= 0) continue;

        // Always use bricks, when we can..
        if (neededBricks <= bricks) {
            bricks -= neededBricks;
            queue.enqueue(neededBricks);
        } else if (ladders) {
            // If we don't have enough bricks to move further, we use ladder for the
            // biggest jump we've made earlier (get those bricks back & try again)
            if (queue.size() && queue.front().element >= neededBricks) {
                bricks += queue.dequeue().element;
                i--;
            }

            ladders--;
        } else {
            break;
        }
    }

    return i - 1;
};


class MinPriorityQueueCustom {
    private queue: number[];
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        this.queue.sort((a, b) => a - b);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}


function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const n = heights.length;
    const pq = new MinPriorityQueueCustom();
    for (let i = 0; i < n - 1; i++) {
        let diff = heights[i + 1] - heights[i];
        if (diff > 0) pq.enqueue(diff);
        if (pq.size() > ladders) bricks -= pq.dequeue()!;
        if (bricks < 0) return i;
    }
    return n - 1
};

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const n = heights.length;
    const pq = new MinPriorityQueue();
    for (let i = 0; i < n - 1; i++) {
        let diff = heights[i + 1] - heights[i];
        if (diff > 0) pq.enqueue(diff);
        if (pq.size() > ladders) bricks -= pq.dequeue().element;
        if (bricks < 0) return i;
    }
    return n - 1
};