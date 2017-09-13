class Stack {
  constructor() {
    this.items = [];
  }
  
  size() {
    return this.items.length;
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {    
    return this.items.pop();
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

//ex: let stack = new Stack();