
class LinkedListNode {
    constructor(data, next){
        this.data = data
        this.next = next
    }
    }
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    //Insert At Head
 insertHead(data){
const newNode = new LinkedListNode(data, this.head)
this.head = newNode
this.size++
return this.head

}

//Get By Index

getAtIndex(index){
if(index <=0 || index> this.size) return null

for(let i=0; i< index; i++){
   this.head = this.head.next
}
return this.head
}
    //PrintList
printList(){
    let current = this.head
    while(current){
        console.log(current.data)
        current = current.next
    }
    
}
    // Delete A head
deleteAtHead(){
this.head = this.head.next
this.size--
console.log(`removed ${this.head}`)
}
    //Clear List
clearList(){
this.head = null
this.size = 0
}
    //Insert At index
insertAtIndex(index, data){
    if(index === 0) return this.insertHead(data)
    const prev = getAtIndex(index-1)
    if(prev == null) return null
    prev.next = new LinkedListNode(data, prev.next)
    this.size++
    console.log(`added ${data} at index ${index}`)
}
    //Delete At index
    deleteAtIndex(index){
        if(index === 0) return this.removeHead()
        const prev = this.getByIndex(index -1)
		if(prev == null) return null
		prev.next = prev.next.next
		this.size--
    }
}

const ll = new LinkedList()



    ll.printList()
console.log(ll.insertHead(10))
console.log(ll.insertHead(20))
console.log(ll.insertHead(30))
console.log(ll.insertHead(40))
ll.printList()
console.log(ll.getAtIndex(2))

console.log(ll.deleteAtHead())
ll.printList()