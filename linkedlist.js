class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);

        if(!this.head) {
            newNode.next = null;
        }else {
            newNode.next = this.head;
        }
        this.head = newNode
    }

    addLast(data) {
        let curr = this.head;
        while(curr.next) {
            curr = curr.next;
        }
        const newNode = new Node(data);
        curr.next = newNode;
        newNode.next = null;
    }

    addAt(index, data) {
        const newNode = new Node(data);
        let curr = this.head;
        for(let i = 0 ; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    removeFromFirst() {
        this.head = this.head.next;
    }

    removeFromLast() {
        let curr = this.head;
        while(curr.next.next) {
            curr = curr.next;
        }
        curr.next = null;
    }

    removeAt(index) {
        let curr = this.head;
        for(let i = 0 ; i < index - 1 ; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    print() {
        let curr = this.head;
        while(curr.next) {
            console.log(curr.data);
            curr = curr.next;
        }
        console.log(curr.data);
    }
}


const list = new LinkedList();
list.addFirst(2);
list.addFirst(3);
list.addFirst(4);
list.addLast(4);
list.addAt(2,5);
list.removeFromFirst();
list.removeFromFirst();
list.removeFromLast();
list.addLast(4);
list.addLast(2);
list.addLast(1);
list.removeAt(2);
list.print();
