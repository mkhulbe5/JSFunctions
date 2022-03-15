Array.prototype.myReduce = function(cb, iv){
    let pv;
    if(pv == undefined){
        arr[0] = pv;
        for(let i = 1; i < this.length; i++){
            let cv = this[i];
            pv = cb(pv , cv , i , this);
        } }
    else{
        pv = cv;
        for(let i = 0; i<this,this.length; i++){
            let cv = this[i];
            pv = cb(pv , cv , i , this);
        } }
    return pv;
}



let arr = [10,20,30,40,50];

let red = arr.myReduce(function(pv, cv , ci , oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});
console.log(red);