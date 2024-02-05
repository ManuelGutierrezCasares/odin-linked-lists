import { appendLastNode, getListSize, getLastNode, deleteLastNode, checkNodeValue, findNodeIndex, printNodes } from './helpers.js';

class LinkedList {
  constructor(){
    this.first = null;
  }
  append (value) {
    const node = new Node(value);
    appendLastNode(this.first, node);
    return this;
  }

  prepend (value) {
    const node = new Node(value);
    node.nextNode = this.first;
    this.first = node;
    return this;
  }

  size () {
    return getListSize(this.first);
  }

  head () {
    return this.first !== null ? `List Head: ${this.first.value}` : 'Cannot get Head, Linked List is empty';
  }

  tail () {
    return this.first !== null ? `List Tail: ${getLastNode(this.first).value}` : 'Cannot get Tail, Linked List is empty';
  }

  at (index) {
    if (index < 0) {
      return 'Index can\'t be less than 0';
    }
    if (this.first === null) {
      return 'Linked List is empty';
    }
    let tmp = this.first;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      } else {
        return `Node at ${index} DOES NOT EXIST`;
      }
    }
    return `Node at ${index}: ${tmp.value}`;
  }

  pop () {
    if (this.first == null) return console.error('Can not delete empty Linked List');
    return deleteLastNode(this.first);
  }

  contains (value) {
    return checkNodeValue(this.first, value);
  }

  find (value) {
    return findNodeIndex(this.first, value);
  }

  toString () {
    return printNodes(this.first);
  }

  insertAt (value, index) {
    if (index < 0 || index > this.size()){
      console.error("ERROR: Can't add an index less than 0 or bigger than List size.")
      return -1;
    } else if (index === 0){
      this.prepend(value);
      return this;
    } else if (index === this.size()){
      this.append(value);
      return this;
    } else{
      const node = new Node(value);
      let current = this.first;
      let counter = 0;

      while (counter < index-1){
        console.log(current)
        counter++;
        current = current.nextNode;
      }
      let tmp = current.nextNode;
      current.nextNode = node;
      node.nextNode = tmp;

      return this;
    }
  }

  removeAt (index){
    if (index < 0 || index > this.size()){
      console.error("ERROR: Can't delete an item which index is less than 0 or bigger than List size.")
      return -1;
    } else if (index === 0){
      if (this.first == null) return console.error('Can not delete empty Linked List')
      this.first = this.first.nextNode;
      return this;
    } else if (index === this.size()){
      this.pop();
      return this;
    } else {
      let current = this.first;
      let counter = 0;

      while (counter < index-1){
        counter++;
        current = current.nextNode;
      }
      current.nextNode = current.nextNode.nextNode
    }
    return this;
  }
}

class Node {
  constructor (value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const ll = new LinkedList();
ll.pop();
// ll.prepend('wow');
// ll.prepend('wow2');
// ll.prepend('wow3');
// ll.append('hello');
// ll.append('hello4');

// console.log(ll.size())
// console.log(ll.toString());
// console.log(ll.at(3))


// //console.log(ll.head());

// ll.insertAt('pedro',3);
// console.log(ll.toString());

// ll.insertAt('lorena', 5);
// console.log(ll.toString());
// console.log(ll.size())

// ll.removeAt(7);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(5);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(2);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.size())
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.size())