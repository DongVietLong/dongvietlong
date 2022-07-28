/**
 * 
 * enqueue(item) : Lấy phần từ đầu tiên của queue
 * dequeue(): Thêm phần tử vào đỉnh queue
 * peek(): Lấy giá trị phần tử đầu tiên của queue
 * isEmpty(): Trả về là true nếu queue rỗng
 * 
 * 
*/

class Queue {
  collection = [];

  print() {
    return this.collection;
  }

  enqueue(element) {
    return this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }
}
