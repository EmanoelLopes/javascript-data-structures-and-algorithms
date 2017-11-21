//- Minimum Circular Queue

class CircularQueue {
  constructor(capacity) {
    this.head = this.tail = -1;
    this.capacity = capacity;
    this.data = [];
  }

  isFull() {
    return (this.tail + 1) % this.capacity === this.head
  }

  isEmpty() {
    return this.head === -1
  }

  size() {
    return (this.capacity - this.head - this.tail + 1) % this.capacity
  }

  enqueue(data) {
    if (this.isFull()) return new Error('Queue is fill')
    this.tail = (this.tail + 1) % this.capacity
    if (this.head === -1) this.head = this.tail
    this.data[this.tail] = data
  }

  dequeue() {
    if (this.isEmpty()) {
      return new Error('Queue is empty')
    } 
    let data = this.data[this.head]
    (this.head === this.tail) ? this.head = this.tail = -1 : this.head = (this.head + 1) % this.capacity;
    return data
  }
}

//- Example
var q = new CircularQueue(3)
q.enqueue('Regina');
q.enqueue('Adam');
q.enqueue('Albert');
q.enqueue('Ana');
q.enqueue('Bob');
q.enqueue('John');
q.enqueue('Thurston');

console.log(q.isEmpty());
console.log(q.isFull());
console.log(q.size());
console.log(q.data);