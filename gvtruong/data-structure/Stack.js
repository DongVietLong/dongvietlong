// Stack hoạt động theo nguyên tắc LIFO.
/**
 * pop(): Lấy ra item đỉnh stack
 * push(item): Thêm item vào đỉnh stack
 * peek(): Trả về giá trị đầu tiên của đỉnh stack
 * isEmpty(): Trả về là true nếu stack rỗng
 * 
*/
class Stack {
  count = 0;
  storage = {};

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peak() {
    return this.storage[this.count - 1];
  }

  length() {
    return this.count;
  }
}
