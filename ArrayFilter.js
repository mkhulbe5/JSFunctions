let arr = [12,4,5,77,82,33];

let res = arr.filter(function(v,i,oarr){
    if( v % 2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(res);
