let o1 = {
    age:10
};

let o2 = {
    age:20
};

let o3 = {
    age:30
};


let anarr = [o1 , o2 , o3];
displayObjectArray(anarr);

let scopy = anarr.slice(); // creating shallow copy.
displayObjectArray(scopy);

scopy[0].age = 23;
displayObjectArray(anarr);
displayObjectArray(scopy);



function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

function displayObjectArray(arr){
    let str = "";

    for(let i = 0; i < arr.length; i++){
        str += arr[i].age + " ";
    }
    console.log(str + " ");
}