/**
 * Created by Zoran on 22.10.2014..
 */
var myString;
myString = "Some text";
var obj = {"name":"Brad", "occupation":"Hacker", "age":"unknown"}
console.log(obj.name);
console.log(myString)
var i = 1;
var days=["Monday","Tuesday","Wednesday","Thursday","Friday"];
var j = 0;
do{
    var day = days[j++];
    console.log("It's " + day)

}while(day != "Wednesday");
while(i<5){
    console.log("brojilo " + i);
    i++;
}
for (var x= 1; x<=3; x++){
    for(var y=1; y<=3; y++){
        console.log(x + "X" + y + " = " + (x*y));
    }
}
for (var idx in days){
    console.log("It's " + days[idx] + "<br>");

}
for (var idx in days){
   if(days[idx] == "Wednesday")
    break;
   console.log("It's " + days[idx] + "<br>");

}
for (var idx in days){
    if(days[idx] == "Wednesday")
        continue;
    console.log("It's " + days[idx] + "<br>");

}
function myFunction(){
    console.log("Hello world");
}
myFunction();
function greeting (name, city) {
    console.log("Hello " + name);
    console.log(". How's the weather in "+city);
}
greeting("Zoran", "Slavonski Brod");

//Return func
function formatGreeting(name, city){
    var retStr ="";
    retStr += "Hello " + name;
    retStr +=" Welcome to " + city;
   return retStr;
}
var greeting = formatGreeting("Zoran", "Slavonski Brod");
console.log(greeting);

function myFunct(value){
    if (value == 0)
        return value;
    value++;
    return value;
}
var valueR = myFunct("w")
console.log(valueR);

//Anon func
function doCalc(num1, num2, calcFunction){
    return calcFunction(num1, num2);
}
function addFunc(n1, n2){
    return n1 *n2;
}
var zbroj = doCalc(5, 10, addFunc);
console.log(zbroj)

//inline anon
console.log(doCalc(5,10, function(n1,n2){return n1+n2}));
console.log(doCalc(5,10, function(n1,n2){return n1*n2}));

//scope var
var myVar = 1;
function writeIt(){
    var myVar = 2;
    console.log("Var = " + myVar)
    writeMore();
}
function writeMore(){
    console.log("var = "+myVar)
}
writeIt();
//obj
var x;
x = Number("5");
console.log(typeof(x));

var myObj;
myObj = {};
var s;
s = myObj.name;
myObj.name = "New NAme";
console.log(s);

//myObj.getName = function(){return this.name};
//var name = myObj.getName();
//console.log(name);

//custom obj
var user = new Object()
user.first = "Brad";
user.last = "Dayley";
user.getName = function(){return this.first + " " + this.last};
console.log(user.getName())
//enclosed dec obj
function User(first, last){
    this.first = first;
    this.last = last;
    this.getName = function(){return this.first + " " + this.last};
}
var user = new User("Zoran", "mihelcic")
console.log(user.getName());
//prototype OBject pattern
function UserP(first, last){
    this.first = first;
    this.last = last;
}
UserP.prototype = {
    getFullName: function(){
        return this.first + " " + this.last;
    }
}
var user = new UserP("Toma", "Zdravkovic");
console.log(user.getFullName());

//manipulacija stringova
var myString = "Learn javascript in 24h"
var numofChars =  myString.length;
console.log(numofChars)

var word1 = "Today ";
var word2 = "is ";
var word3 = "tomorrows\' ";
var word4 = "yesterday.";
var sentence1 = word1 + word2 + word3 + word4;
var sentence2 = word1.concat(word2,word3,word4);
var myStr = "I think, therefore I am.";
if(myStr.indexOf("I") != -1){
    console.log(myStr);
}
var username = "Brad";
var output;
output = "<username> please enter your password:";
output.replace("<username>", username);
console.log(output);

//array
var arr = ["one", "two", "three"];
var arr2 =  new Array();
arr2[0] = "one";
arr2[1] = "two";
arr2[3] = "three";
var arr3 = new Array();
arr3.push("one");
arr3.push("two");
arr3.push("three");

var numOfItems = arr.length;
console.log(numOfItems);

var arr1 = [1,2,3];
var arr2 = ["three", "four", "five"];
var arr3 =  arr1 + arr2;
var arr4 = arr1.concat(arr2);

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var i = 0; i<week.length; i++){
    console.log(week[i]);
}
for(dayIndex in week){
    console.log(week[dayIndex])
}

var timeArr = [12,10,36];
var rimeStr = timeArr.join(" ");
console.log(rimeStr);
