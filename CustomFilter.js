Array.prototype.myFilter = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        let v = this[i];
        let rv = callback(v,i,this);
        if( rv == true){
            res.push(rv);
        }
    }
    return res;
}


let arr = [12,4,5,77,82,33];

let output = arr.myFilter(function(v,i,oarr){
    if( v % 2 == 1){
        return true;
    }
    else{
        return false;
    }
});
console.log(output);