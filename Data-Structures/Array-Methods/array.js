var girls  = [
    {name:'Jenin', count: 10},
    {name:'Juliet', count: 40},
    {name:'Ericah', count: 78},
    {name:'Wanjiru', count: 4},
    {name:'Njeri', count: 7},
    {name:'Bianca', count: 23},
    {name:'Lucy', count: 0}
]

const dateAble = girls.filter(x=> x.count < 8)
.map(n=> (n))

var hoes = girls.filter(d => d.count >20)
.map(x => x.name)
console.log(`hoes edition names: ${hoes}`)

console.log(dateAble);

