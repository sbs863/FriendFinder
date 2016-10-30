 function sum(obj) {
     return Object.keys(obj)
         .reduce(function(sum, key) {
             return sum + parseFloat(obj[key]);
         }, 0);
 }

friendValues = [];
 for (var i = 0; i < friendArray.length; i++) {

     friendValues.push(sum(friendArray[i].question1 + friendArray[i].question2 + friendArray[i].question3 + friendArray[i].question4 + friendArray[i].question5 + friendArray[i].question6 + friendArray[i].question7 + friendArray[i].question8 + friendArray[i].question9 + friendArray[i].question10));

 }

console.log(friendValues);

module.exports = friendValues;