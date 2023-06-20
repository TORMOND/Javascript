class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count +=1
        return this.count -1 
    }
    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count-1]
        this.count -=1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    peek(){
        console.log(`Top element is ${this.items[this.count- 1]}`)
        return this.items[this.count -1]
    }
    isEmpty(){
        console.log(this.count ==0? 'Stack is Empty': 'Stack is NOT Empty')
        return this.count == 0
    }
    size(){
        console.log(`${this.count} element in stack`)
        this.count
    }
    print(){
        let str = ''
        for (let i=0; i<this.count; i++){
            str +=this.items[i] + ''
        }
        return str
    }
    clear(){
        this.items = []
        this.count = 0
        console.log('Stack cleared')
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()
stack.push(100)
stack.push(200)
stack.push(300)
stack.size()
stack.isEmpty()

stack.peek()
stack.pop()
stack.peek()


console.log(stack.print())

stack.clear()
stack.isEmpty()

