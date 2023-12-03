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

  #at(index) {
    if (index < 0 || index > this.size - 1) return null;
    let currentNode = this.#head;
    let currentIndex = 0;
    while (currentNode.nextNode != null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return currentNode;
  }

  at(index) {
    const nodeAtIndex = this.#at(index);
    return nodeAtIndex ? nodeAtIndex.value : null;
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

  shift() {
    const oldHead = this.#head;
    this.#head = this.#head.nextNode;
    this.#size -= 1;
    return oldHead.value;
  }

  contains(value) {
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return currentNode.value === value;
  }

  find(value) {
    let currentNode = this.#head;
    let currentIndex = 0;
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return currentNode.value === value ? currentIndex : null;
  }

  toString() {
    let printString = "";
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      printString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    printString += `( ${currentNode.value} ) -> null`;
    return printString;
  }

  insertAt(value, index) {
    if (index < 0) return null;
    if (index === 0) return this.prepend(value);
    if (index >= this.#size) return this.append(value);
    this.#size += 1;
    const nodeToInsertAfter = this.#at(index - 1);
    const nodeToInsertBefore = nodeToInsertAfter.nextNode;
    const newNode = new Node(value, nodeToInsertBefore);
    nodeToInsertAfter.nextNode = newNode;
    return this;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) return null;
    if (index === 0) return this.shift();
    this.#size -= 1;
    const nodeToRemoveAfter = this.#at(index - 1);
    const nodeToRemove = nodeToRemoveAfter.nextNode;
    nodeToRemoveAfter.nextNode = nodeToRemove.nextNode;
    return this;
  }
}
