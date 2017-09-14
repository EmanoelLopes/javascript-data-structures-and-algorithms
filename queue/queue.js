class Queue {
  constructor() {
    this.items = [];
  }
  
  size() {
    return this.items.length;
  }
  
  enqueue(item) {
    this.items.push(item);
  }
  
  dequeue() {    
    return this.items.shift();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    return this.items.splice(0);
  }

  print() {
    console.log(this.items.toString());
  }
}

let queue = new Queue();