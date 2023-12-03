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
  }

  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#head = newNode;
    if (this.#tail == null) this.#tail = newNode;
    this.#size += 1;
  }

  get size() {
    return this.#size;
  }

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}

  insertAt(value, index) {}

  removeAt(index) {}

  get head() {
    return this.#head;
  }
}

const linkedList = new LinkedList();

linkedList.append("First!");
linkedList.append("Second!");
linkedList.prepend("Now I am first");

console.log(linkedList.head);
console.log(linkedList.size);
