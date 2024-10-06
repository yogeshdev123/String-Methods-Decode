//push method of an array
console.log("push method of an array")
var arr = ["Banana", "Orange", "Apple", "Mango"];

console.log(arr);
function push(){
    
    arr[arr.length]=arguments[0];
 
}
push("Ban");
console.log(arr);
// pop method an array
console.log("pop method of an array")
var arr = ["Banana", "Orange", "Apple", "Mango"];

console.log(arr);
function pOp(){
    
    arr.length=arr.length-1;
}
pOp();
console.log(arr);
// shift method an array
console.log("shift method an array")
var arr = ["Banana", "Orange", "Apple", "Mango"];

console.log(arr);
function shift(){
    
    for(let i=0;i<arr.length-1;i++){
        let swap=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=swap;
    }
    arr.length=arr.length-1
}
shift();
console.log(arr);
// unshift method an array
console.log("unshift method an array")
var arr = ["Banana", "Orange", "Apple", "Mango"];

console.log(arr);
function unshift(){
    for(let j=arguments.length-1;j>=0;j--){
    arr[arr.length]=arguments[j];
    for(let i in arr){
        let swa=arr[i];
        arr[i]=arr[arr.length-1];
        arr[arr.length-1]=swa
    }
}
}
unshift("Ban", "Onge", "le", "Mao");
console.log(arr);