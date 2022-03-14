let arr = [
    {
        age : 12,
        gender: 'M'
    },

    {
        age : 33,
        gender: 'F'
    },
    {
        age : 22,
        gender: 'F'
    },
    {
        age : 29,
        gender: 'M'
    },

    {
        age : 22,
        gender: 'F'
    },
]

let shortlist = arr.map(function(v,i,oarr){
    if(v.gender == 'F' && v.age > 21 && v.age <=30){
        return true;
    }
    else {
        return false;
    }
});

console.log(shortlist);




