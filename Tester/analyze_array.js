function analyzeArray(arr){
 return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  };
}
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
function min(arr){
    let Min;
    for(let i=0;i<arr.length;i++){
        Min=arr[0];
        if(arr[i]<Min){
            Min=arr[i];
        }
    }
    return Min;
}
function max(arr){
    let Max;
    for(let i=0;i<arr.length;i++){
        Max=arr[0];
        if(arr[i]>Max){
            Max=arr[i];
        }
    }
    return Max;
}
let arr=[1,2,3,4,5,6]
console.log(analyzeArray(arr));
export default {
  analyzeArray
};