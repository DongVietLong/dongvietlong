// class stack {
//     constructor() {
//         this.stack = [];
//     } // khởi tạo stack

//     push(item) {
//         return this.stack.push(item);
//     } // thêm 

//     pop() {
//         return this.stack.pop();
//     } lấy ra 1 phần tử

//     peek() {
//         return this.stack[this.length - 1];
//     } trả về giá trị đầu của stack

//     get length() {
//         return this.stack.length;
//     } // độ dài 

//     isEmpty() {
//         return this.length === 0;
//     } //nếu rỗng trả về không
// }


class queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        return this.queue.unshift(item);
    } //lấy phần tử đàu tiên 

    dequeue() {
        return this.queue.shift();
    } // thêm phần tử vào đỉnh

    peek() {
        return this.queue[this.length -1];
    } //lấy giá trị đầu tiên

    isEmpty() {
        return this.queue.length === 0;
    } //trả về true
}



// stack liks:https://www.youtube.com/watch?v=wtynhUwS5hI&t=5s
// ngăn xếp
// class Stack {
//     constructor() {
//         this.items = []
//         this.count = 0
//     }

//     // Thêm phần tử vào đầu ngăn xếp
//     push(element) {
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count}`)
//         this.count += 1
//         return this.count - 1
//     }

//     // Quay lại và xóa phần tử trên cùng trong ngăn xếp
//     // Trả về không xác định nếu ngăn xếp trống
//     pop() {
//         if(this.count == 0) return undefined
//         let deleteItem = this.items[this.count - 1]
//         this.count -= 1
//         console.log(`${deleteItem} removed`)
//         return deleteItem
//     }

//     // Kiểm tra phần tử trên cùng trong ngăn xếp
//     peek() {
//         console.log(`Top element is ${this.items[this.count - 1]}`)
//         return this.items[this.count - 1]
//     }

//     // Kiểm tra xem ngăn xếp có trống không
//     isEmpty() {
//         console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
//         return this.count == 0
//     }

//     // Kiểm tra kích thước của ngăn xếp
//     size() {
//         console.log(`${this.count} elements in stack`)
//         return this.count
//     }

//     // In các phần tử trong ngăn xếp
//     print() {
//         let str = ''
//         for(let i = 0; i < this.count; i++) {
//             str += this.items[i] + ' '
//         }
//         return str
//     }

//     // Xóa ngăn xếp
//     clear() {
//         this.items = []
//         this.count = 0
//         console.log('Stack cleared..')
//         return this.items
//     }
// }

// const stack = new Stack()

// stack.isEmpty()

// stack.push(100)
// stack.push(200)
// stack.push(500)


// stack.peek()



// console.log(stack.print())

// stack.pop()
// stack.pop()

// stack.clear()

// console.log(stack.print())

// stack.size()

// stack.isEmpty()

// // queue links:https://www.javascripttutorial.net/javascript-queue/
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    } //lấy phần tử ở đỉnh
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    } //thêm phần tử vào và xóa phần tử đầu tiên
    peek() {
      return this.elements[this.head];
    } //thêm phần tử
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
  
  let q = new Queue();
  for (let i = 1; i <= 10; i++) {
    q.enqueue(i);
  }
  
  // lấy giá trị đầu
  console.log(q.peek()); // 1
  
  // độ dài
  console.log(q.length); // 7
  
  // thêm
  while (!q.isEmpty) {
    console.log(q.dequeue());
  }



//    linked list links: https://www.youtube.com/watch?v=ZBdE8DElQQU&t=2s

// Xây dựng một node
// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   // Tạo / Lấy / Xóa các nút khỏi danh sách được liên kết
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     // Chèn nút đầu tiên
//     insertFirst(data) {
//       this.head = new Node(data, this.head);
//       this.size++;
//     }
  
//     // Chèn nút cuối cùng
//     insertLast(data) {
//       let node = new Node(data);
//       let current;
  
//       // If empty, make head
//       if (!this.head) {
//         this.head = node;
//       } else {
//         current = this.head;
  
//         while (current.next) {
//           current = current.next;
//         }
  
//         current.next = node;
//       }
  
//       this.size++;
//     }
  
//     // chèn index
//     insertAt(data, index) {
//       //  ngoài phạm vi
//       if (index > 0 && index > this.size) {
//         return;
//       }
  
//       // nếu chỉ mục đầu
//       if (index === 0) {
//         this.insertFirst(data);
//         return;
//       }
  
//       const node = new Node(data);
//       let current, previous;
  
//       // Set current to first
//       current = this.head;
//       let count = 0;
  
//       while (count < index) {
//         previous = current; // Node before index
//         count++;
//         current = current.next; // Node after index
//       }
  
//       node.next = current;
//       previous.next = node;
  
//       this.size++;
//     }
  
//     // Get at index
//     getAt(index) {
//       let current = this.head;
//       let count = 0;
  
//       while (current) {
//         if (count == index) {
//           console.log(current.data);
//         }
//         count++;
//         current = current.next;
//       }
  
//       return null;
//     }
  
//     // Remove at index
//     removeAt(index) {
//       if (index > 0 && index > this.size) {
//         return;
//       }
  
//       let current = this.head;
//       let previous;
//       let count = 0;
  
//       // Remove first
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         while (count < index) {
//           count++;
//           previous = current;
//           current = current.next;
//         }
  
//         previous.next = current.next;
//       }
  
//       this.size--;
//     }
  
//     // Clear list
//     clearList() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     // Print list data
//     printListData() {
//       let current = this.head;
  
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   const ll = new LinkedList();
  
//   ll.insertFirst(100);
//   ll.insertFirst(200);
//   ll.insertFirst(300);
//   ll.insertLast(400);
//   ll.insertAt(500, 3);
  
//   // ll.clearList();
//   // ll.getAt(2);
  
//   ll.printListData();