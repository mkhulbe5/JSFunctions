let arr = [11,23,44,56,77];
let even = [];
let odd = [];

while(arr.length > 0){
    let val = arr.shift();
    if(val % 2  == 0){
        even.push(val);
    }
    else{
        odd.push(val);
    }
}

arr = odd.concat(even);
displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}