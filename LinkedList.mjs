import Node from "./Node.mjs";

class LinkedList {
  #head;

  #tail;

  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.#tail != null) this.#tail.nextNode = newNode;
    this.#tail = newNode;
    if (this.#head == null) this.#head = newNode;
    this.#size += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#head = newNode;
    if (this.#tail == null) this.#tail = newNode;
    this.#size += 1;
    return this;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head.value;
  }

  get tail() {
    return this.#tail.value;
  }

  at(index) {
    if (index < 0) return null;
    let currentNode = this.#head;
    let currentIndex = 0;
    while (currentNode.nextNode != null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return index === currentIndex ? currentNode.value : null;
  }

  pop() {
    let prevNode;
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = null;
    this.#tail = prevNode;
    this.#size -= 1;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return currentNode.value === value;
  }

  find(value) {}

  toString() {}

  insertAt(value, index) {}

  removeAt(index) {}

  get list() {
    return this.#head;
  }
}

const linkedList = new LinkedList();

linkedList.append("First!").append("Second!").prepend("Now I am first");

console.log(linkedList.list);
console.log(linkedList.size);
console.log(linkedList.at(-5));
console.log(linkedList.at(0));
console.log(linkedList.at(1));
console.log(linkedList.at(4));
console.log(linkedList.pop());
console.log(linkedList.list);
console.log(linkedList.size);
console.log(linkedList.contains(0));
console.log(linkedList.contains("First!"));
console.log(linkedList.contains("Third"));
