const { tbody } = require("framer-motion/client");

class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.min.length === 0) {
      this.min.push(val);
    } else if (val < this.min[this.min.length - 1]) {
      this.min.push(val);
    } else {
      this.min.push(this.min[this.min.length - 1]);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.min.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }

  getStack() {
    return this.stack;
  }
}

let minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(0);

console.log(minStack.getMin()); // return 0
console.log(minStack.getStack());

minStack.pop();
//
console.log(minStack.top()); // return 2
console.log(minStack.getStack());
console.log(minStack.getMin()); // return 1
console.log(minStack.getStack());
