// ! Stack
//stack là một cấu trúc dữ liệu tuyến tính trong đó việc bổ sung hoặc loại bỏ phần tử phải tuân theo một thứ tự cụ thể.
class Stack {
  constructor() {
    this.elements = [];
  }

  // đẩy các phẩn tử vào một mảng để tạo dữ liệu stack
  push(element) {
    this.elements.push(element);
  }

  // loại bỏ phần tử trên cùng của stack 
  // t.h không có element nào sẽ trả về undefined
  pop() {
    if (this.elements.length == 0) {
    return undefined
    } else {
      return this.elements.pop();
      // return (this.elements.pop() - 1);
    }
  }

  // Trả về giá trị top của stack nhưng ko xóa nó
  peek() {
    if(this.elements.lenght == 0) {
      return undefined;
    } else {
      return this.elements[this.elements.length - 1];
    }
  }

  // Trả về true nếu stack trống
  isEmpty(){
    if (this.elements.length == 0){
      return "tao khong co gi"
    } else {
      return "! tao khong co gi"
    }
  }

  // Kiểm tra các elements hiện có trong stack
  size() {
    return this.elements.length;
  };

  // in các elements trong stack
  printStack() {
    var elements = "";
    for(var i = 0; i < this.elements.length; i++) {
      elements += this.elements[i] + " ";
    }
    return elements;
  }

  // xóa các elements trong stack 
  clear() {
    this.elements = [];
    this.elements.length = 0;
    return this.elements;
  }
}

var nameB = new Stack();
// //! push
nameB.push("a");
nameB.push("b");
nameB.push("c");

// //! pop
let popTest = nameB.pop(); // return 3
console.log(nameB); 

//! peek
let peekTest = nameB.peek();
console.log(peekTest)

//! isEmpty
let isEmptyTest = nameB.isEmpty();
console.log(isEmptyTest)

//! size
let sizeTest = nameB.size();
console.log(sizeTest);

//! printStack
let printStacks = nameB.printStack();
console.log(printStacks)

//! clear 
let clearTest = nameB.clear();
console.log(clearTest);