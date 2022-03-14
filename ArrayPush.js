let arr = [10,20,45,67];
arr.push(12);
displayArray(arr);


arr.push(98);
displayArray(arr);

arr.push(10012);
displayArray(arr);

arr.push(12,45);
displayArray(arr);






function displayArray(arr){
    console.log(arr + " = " + arr.length);
}