let arr = [
    {name : "A",gender : "F", age: 21},
    {name : "B",gender : "M", age: 21},
    {name : "C",gender : "F", age: 44},
    {name : "D",gender : "F", age: 24},
    {name : "E",gender : "M", age: 32},
]


let fages = arr.filter(function(v,i,oarr){
    if(v.gender == 'F'){
        return true;
    }
}).map(function(v,i,oarr){
    return v.age;
});
console.log(fages);