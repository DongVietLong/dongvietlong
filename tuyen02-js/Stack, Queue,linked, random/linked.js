// Linked list là một cấu trúc dữ liệu tuyến tính tương tự như một mảng. Tuy nhiên, không giống như mảng, các phần tử không được lưu trữ trong một vị trí hoặc chỉ mục bộ nhớ cụ thể. Tuy nhiên, không giống như mảng, các phần tử không được lưu trữ trong một vị trí hoặc chỉ mục bộ nhớ cụ thể. 
// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Thêm node đầu tiên
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // thêm vào node cuối
  insertLast(data) {
    let node = new Node(data);
    let current;

    // nếu empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

}

const test = new LinkedList();
console.log(test)
test.insertFirst(200);
test.insertFirst(100);
test.insertFirst(100);
test.insertFirst(200);
test.insertFirst(300);
test.insertLast(400);
test.insertLast(111);
