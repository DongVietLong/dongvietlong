class Queue {
  constructor() {
    this.queue = [];
  }

  // thêm elements
  enqueue(item) {
    return this.queue.push(item);
  }
  enqueue11(item) {
    return this.queue.unshift(item);
  }
  
  // xóa 1 element
  dequeue() {
    if (this.queue.length == 0) {
    return undefined
    } else {
      return this.queue.shift();
    }
  }

  //truy cap element dau tien
  peek() {
    if (this.queue.length == 0) {
      return "QUeue khong co gi"
    } else {
      return this.queue[0];
    }
  }

  // tính độ dài length
  size() {
    return this.queue.length;
  }

  // Trả về true nếu queue trống
  isEmpty(){
    if (this.queue.length == 0){
      return "tao khong co gi"
    } else {
      return "! tao khong co gi"
    }
  }
}

let queuE = new Queue();

//! enqueue
let enqueuE = queuE.enqueue(111);
let enqueuE1 = queuE.enqueue(222);
let enqueuE2 = queuE.enqueue(333);
let enqueuE4 = queuE.enqueue(444);
console.log(queuE);

//! dequeue 
// let dequeue = queuE.dequeue();

//! peek
let peeK = queuE.peek();
console.log(peeK)

//! length
let lengtH = queuE.size();
console.log(lengtH)

//! isEmpty
let isEmptY = queuE.isEmpty()
console.log(isEmptY)

let xxxx = queuE.enqueue11();
console.log(xxxx)