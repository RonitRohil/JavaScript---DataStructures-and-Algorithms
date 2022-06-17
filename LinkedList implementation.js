// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList 
{
  constructor(value) 
  {
    this.head = 
    {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) 
  {
    const newNode =
    {
      value: value,
      next: null
    };

    console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value)
  {
    const newNode = 
    {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }

  printList()
  {
    const array = [];
    let currentNode = this.head;

    while(currentNode !== null)
    {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  
  
  insert(index, value)
  {
    // chech params
    if(index >= this.length)
    {
      return this.append(value);
    }

    const newNode = 
    {
      value: value,
      next: null
    };

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList
    
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index)
  {
    // check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(6);
myLinkedList.prepend(14); 
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList)