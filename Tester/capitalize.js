function capital(value){
let firstLetter=value.charAt(0);
firstLetter=firstLetter.toUpperCase();
const rest=value.slice(1);
return firstLetter+rest;
}
export default {
  capital
};