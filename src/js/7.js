function reverseSinglyLinkedList(list) {
  let previous = null;
  let current = list;
  let next = list.next;

  while (next) {
    const temp = next.next;
    current.next = previous;
    next.next = current;
    previous = current;
    current = next;
    next = temp;
  }

  return current;
}

const LINKED_LIST = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

console.log(reverseSinglyLinkedList(LINKED_LIST));
