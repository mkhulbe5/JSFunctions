let arr = [66,54,123,45,78];

let na1 = arr.slice(1,4);
displayArray(na1);

let na2 = arr.slice(1);
displayArray(na2);

let na3 = arr.slice();
displayArray(na3);



//Case Of Negative Indexes



function displayArray(arr){
    console.log(arr + " = " + arr.length);
}