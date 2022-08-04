// Create stack 
class Stack {

    constructor(maxSize) {
 
       if (isNaN(maxSize)) {
 
          maxSize = 10;
 
       }
 
       this.maxSize = maxSize; 
 
       this.container = [];
 
    }
 
    display() {
 
       console.log(this.container);
 
    }
 
    isEmpty() {
 
       return this.container.length === 0;
 
    }
 
    isFull() {
 
       return this.container.length >= maxSize;
 
    }
 
    push(element) {
 
       if (this.isFull()) {
 
          console.log("Stack Overflow!");

          return;
 
       }
 
       this.container.push(element);
 
    }
 
 }
 // Queue
 class Queue {
    constructor(maxSize) {
       // Set default max size if not provided
       if (isNaN(maxSize)) {
          maxSize = 10;
        }
       this.maxSize = maxSize;
       // Init an array that'll contain the queue values.
       this.container = [];
    }
    // Helper function to display all values while developing
    display() {
       console.log(this.container);
    }
    // Checks if queue is empty
    isEmpty(){
       return this.container.length === 0;
    }
    // checks if queue is full
    isFull() {
       return this.container.length >= this.maxSize;
    }
 }
 // Linked List 
 const list = {
    head: {
        value: 6,
        next: {
            value: 10  ,                                           
            next: {
                value: 12 ,
                next: {
                    value: 3 , 
                    next: null	
                    }
                }
            }
        }
    }

//
