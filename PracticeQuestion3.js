let arr = [13, 33, 10, 45, 17, 23, 44, 66, 91];

for (let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    let isPrime = IsPrime(val);

    if (isPrime == true) {
        arr.splice(i, 1);
    }
}
displayArray(arr);


function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}


function IsPrime(val) {
    for (let div = 2; div * div <= val; div++) {
        if (val % div == 0) {
            return false;
        }
    }
    return true;
}