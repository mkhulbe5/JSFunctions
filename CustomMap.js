Array.prototype.myMap = function(callback){
    let res = [];
    for(let i = 0; i<this.length; i++){
        let val = this[i];
        let rv = callback(val , i , this);
        res.push(rv);
    }

    return res;
}


let arr = [2,3,4,5,6,7];
let sqarr = arr.myMap(function(v,i,oarr){
    return v* v;
});
console.log(sqarr);