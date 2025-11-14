function caesarCipher(value,num){
console.log(value);
let result = "";

for (let i = 0; i < value.length; i++) {
    let temp = value.charCodeAt(i); // get ASCII code
    if(65<=temp && temp<=122){
    temp = temp + num;               // add num
    }
    temp = String.fromCharCode(temp); // convert back to character
    result += temp;                  // build new string
}
return result;
}
export default {
  caesarCipher
};