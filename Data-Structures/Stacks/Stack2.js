class Stack2 {
    constructor(){
        this.items = [],
        this.count = 0
    }
    push(element){
        this.items[this.count] = element
        this.count +=1
        console.log(`Added  ${element} to stack: New count ${this.count}`)
        return this.count -1
    }
    pop(){
 if(this.count == 0) return -1
 console.log(`Deleted ${this.items[this.count -1]} from the stack`)
 this.count -=1
 return this.items[this.count -1]
    }
    peek(){
        console.log(this.items[this.count - 1])
    }
    isEmpty(){
        if(this.count !== 0) return console.log('NOT Empty')
        return console.log('Empty')
    }
    clear(){
        this.count = 0
        console.log('Stack cleared')
    }
    size(){
   console.log(`the size of stack = ${this.count}`)
    }
    print(){
        if(this.count == 0) return -1
for(let i = 0; i< this.count; i++){
    console.log(this.items[i])
}
    }
 
}

const s = new Stack2()
s.push(110)
s.push(120)
s.push(130)
s.isEmpty()
s.size()
s.print()
s.peek()

s.pop()
s.print()
s.clear()
s.isEmpty()