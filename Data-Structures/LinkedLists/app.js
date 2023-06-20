const LinkedList = require('./list')

const ll =  LinkedList.fromValues(10, 20, 30, 40)
ll.insertAtIndex(2, 60)
ll.print()
console.log(ll.getByIndex(0).value)
console.log(ll.getByIndex(2).value)

ll.removeHead()
ll.print()
ll.removeAtIndex(2)
ll.print()

