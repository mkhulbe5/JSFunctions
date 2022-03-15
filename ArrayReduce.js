let arr = [10,20,30,40,50];

let red = arr.reduce(function(pv, cv , ci , oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});
console.log(red);