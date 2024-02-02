
/*
Goal: to demonstrate low level computer science skills (e.g. pointers)

Description:
Efficiently manage a fixed-size first-in-first-out queue by inserting new elements at the front and removing elements from the back.
Avoid using built-in JavaScript array methods like reduce, foreach, push and pop,
and ensure that pushing occurs only when the queue is not full,
and popping happens only when the queue is not empty.

Note:
You can use global variables and create functions.
Just get something that works

Example:
Pop() - false - [null, null, null, null, null]
Push(1) - [1, null, null, null, null]
Push(2) - [2, 1, null, null, null]
Push(3) - [3, 2, 1, null, null]
Pop() - 1 - [3, 2, null, null, null]
Push(4) - [4, 3, 2, null, null]
Push(5) - [5, 4, 3, 2, null]
Push(6) - [6, 5, 4, 3, 2]
Pop() - 2 - [6, 5, 4, 3, null]
*/

// create a fixed size queue e.g. fifo.length will always be 5
const fifo = new Array(5);
fifo.fill(1);
Object.seal(fifo);

let front = 0;
let rear = 0;


/**
 * Inserts a new element into the Fixed-size FIFO (First-In-First-Out) queue.
 *
 * @param {number} value - The value to be inserted into the queue.
 * @returns {boolean} - Returns `true` if the value was successfully inserted into the queue,
 *                      or `false` if the queue is already full.
 */
function Push(value: number): boolean {
    console.log(value)
    if (fifo[rear] === null) {
        fifo[rear] = value;
        rear = (rear + 1) % fifo.length;
        console.log(fifo)
        return true;
    } else {
        return false;
    }
}

/**
 * Removes and returns the element at the back of the Fixed-size FIFO (First-In-First-Out) queue.
 *
 * @returns {number | false} - Returns the value that was removed from the queue if the queue is not empty,
 *                             or `false` if the queue is empty.
 */
function Pop(): number | false {
    // Implementation details...
    return false;
}





/* ---------- Test Cases ---------- */
console.log('\n\n---------- Starting Tests ----------');

// Queue is empty
console.assert(false === Pop(), "empty pop test failed");

// Push values on to the array until it is full
for (let value = 1; value <= fifo.length; value++) {
    // Expect to push values onto the array as long as there is room
    console.assert(Push(value) === true, `push test #${value} failed`);
}
// Queue is now full

// Make sure you cannot push more values onto a full queue
console.assert(Push(1) === false, `push onto full queue test 1 failed`);
console.assert(Push(1) === false, `push onto full queue test 2 failed`);

// Pop all the values off of the queue
for (let value = 1; value <= fifo.length; value++) {
    // Expect a value to be returned as long there are values in the array
    console.assert(Pop() === value, `pop test #${value} failed`);
}
// Queue is empty

// Ensure you cannot pop values from an empty queue
console.assert(Pop() === false, `pop from empty queue test 1 failed`);
console.assert(Pop() === false, `pop from empty queue test 2 failed`);

// Random insert/removeal
console.assert(Push(10) === true, `Random insert/removal test 1 failed`);
console.assert(Push(20) === true, `Random insert/removal test 2 failed`);
console.assert(Push(30) === true, `Random insert/removal test 3 failed`);
console.assert(Pop() === 10, `Random insert/removal test 4 failed`);
console.assert(Push(40) === true, `Random insert/removal test 5 failed`);
console.assert(Push(50) === true, `Random insert/removal test 6 failed`);
console.assert(Pop() === 20, `Random insert/removal test 7 failed`);
console.assert(Push(60) === true, `Random insert/removal test 8 failed`);
console.assert(Push(70) === true, `Random insert/removal test 9 failed`);
console.assert(Push(80) === false, `Random insert/removal test 10 failed`);


console.log('---------- Done Testing ----------\n\n');