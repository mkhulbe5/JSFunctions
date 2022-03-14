// return the cubes of values whose sq. <=1000

let arr = [5,55,12,33,76];

let res = arr.filter(v=> v * v <= 1000).map(v => v*v*v);
console.log(res);