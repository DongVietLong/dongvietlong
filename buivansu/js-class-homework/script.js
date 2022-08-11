

class Stack {
    constructor() {
      this.data = [];
    }
  
    push(value) {
      this.data.push(value);
      return this;
    }
  
    pop() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  
    empty() {
      if (this.data.length === 0) {
        return true;
      } else {
        return false;
      }
    }
}
  
let stackSu = new Stack();
stackSu.push("Bui");
stackSu.push("Su");
stackSu.push("18+");
stackSu.push("male");
stackSu.pop();
console.log(stackSu.empty());
console.log(stackSu); 


class Queue {
    constructor() {
      this.items = [];
    }
        
    enqueue(element) {    
      // adding element to the queue
      this.items.push(element);
    }

    dequeue() {
      // removing element from the queue
      // returns underflow when called 
      // on empty queue
      if(this.isEmpty())
        return "Underflow";
      return this.items.shift();
    }

    front() {
      // returns the Front element of 
      // the queue without removing it.
      if(this.isEmpty())
          return "No elements in Queue";
      return this.items[0];
    }


    isEmpty() {
      // return true if the queue is empty.
      return this.items.length == 0;
    }
        
    printQueue()
    {
      var str = "";
      for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
      return str;
    }
}

class LinkedList {
  constructor(data){
    this.head = {
      data: data,
      pointer: null
    }
    this.tail = this.head
    this.length = 1
  }
}



/*
function randomName() {
  let name ='';
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let x = 0; x < ((Math.random() * (7)+3)); x++){
    name = name + (alphabet.charAt(Math.floor(Math.random() * alphabet.length)));        
  }; 
  name = name.charAt(0).toUpperCase() + name.slice(1);           
  return name;
}

function randomAge(max) {
  return (Math.floor(Math.random() * max));     
}


function randomHight() {
  return (((Math.random() * 1) +1).toFixed(2)); 
}

const mapped =  [
  {
    key: 'name',
    fun: () => randomName(10)
  },
  {
    key: 'age',
    fun:() =>  randomAge(50)
  },
  {
    key: 'height',
    fun:() =>  randomHight()
  },
]

function listPerson (amount, keys = []) {
  let output = [];
  
  for( x = 0; x < amount ; x++ ){

    let obj = {}

    keys.forEach(k => {
      obj[k.key] = k.fun()
    })

    output.push(obj);
  }
  return output;
}

console.log(listPerson(10,mapped));
*/