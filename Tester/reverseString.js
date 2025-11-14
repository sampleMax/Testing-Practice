function reverseStr(value){
let string=value.split('');
let reverse=[];
for(let i=string.length-1;i>=0;i--){
    reverse.push(string[i]);
}
reverse=reverse.join("");
return reverse;
}
export default {
  reverseStr
};