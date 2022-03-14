//Calculate all possoble subarray of given Array

let arr = [10 , 20 , 30 , 40];

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <= arr.length; j++){
        let rv = arr.slice(i,j);
        displayArray(rv);
    }
}

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}