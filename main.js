//

// creating the items in the list nodes.
class Node {
    constructor(value = null,nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
};

// creating the linkedlist.

class LinkedList{
    constructor(list = null){
        this.list = list;
    };

    // adds a new node to the end of the list.
    append(value) {
        if (this.list === null) {
            this.list = value;
        } else {
            let lastNode = this.list;
            if (lastNode) {
                while(lastNode.nextNode) {
                    lastNode = lastNode.nextNode;
                }
            };
            let node = new Node();
            node.value = value;
            lastNode.nextNode = node;
            return lastNode;
        };
    };

    //adds a new node to the start of the list.
    
    prepend(value) {
        let node = new Node(value);
        if (this.list) {
            node.nextNode = this.list;
        }
        this.list = node;

    };

    // return number of nodes in the linked list.

    size() {
        let count = 0;
        let node = this.list;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    };
     //returns first node .
    head() {
        return this.list;
    };

    // returns the last node in the list.     
    tail() {
        let lastNode = this.list;
        if (lastNode) {
            while(lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        return lastNode;
    };

    // returns the node at the given index.
    at(index) {
        let s = linkedlist.size();
        if (index < 0 || index > s) {
            return "out of reach"
        }

        let currentNode = this.list;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
            
        }
        return currentNode.value;

    };

    //removes the last element from the list.
    pop(){
        let Node = this.list;
        if (Node) {
            while(Node.nextNode) {
                Node = Node.nextNode;
                if (!Node.nextNode) {
                    Node.nextNode = null;
                    return null;
                }
                
            };
        }
    };

    //returns true if the passed value is in the list and otherwise.
    contains(value) {
        let data = this.list;
        if (  data.value === value) {
            return true
        }
        while (data.nextNode) {
            data = data.nextNode;
            if (  data.value === value) {
                return true
            } 
        }
        return false;

    };

    //returns the index of the node containing value.
    find(value){
        let index = 0;
        let data = this.list;
        if (data.value === value) return index;
        while (data.nextNode) {
            data = data.nextNode;
            index++ ;
            if (  data.value === value) {
                return index;
            } 
        }
        return null;
    };

    //represents the linked list objects as string.
    toString() {
        let data = this.list;
        let string = ` [${data.value}] ->`;
        while (data.nextNode) {
            data = data.nextNode;
            string += `[${data.value}] ->`; 
        };
        string += "null";
        return console.log(string);
    };
};




// testing

let node1 = new Node(1);
let node2 = new Node(2);
node1.nextNode = node2;


console.log(node1);


let linkedlist = new LinkedList(node1);
console.log(linkedlist);
console.log(linkedlist.list.nextNode.value);
console.log(linkedlist.pop());
console.log(linkedlist.prepend(8));
console.log(linkedlist.append(9));
console.log(linkedlist.size());
console.log(linkedlist.head());
console.log(linkedlist.tail());
console.log(linkedlist.contains(2));
console.log (linkedlist.find(1));
linkedlist.toString(); 
console.log (linkedlist.at(3));
