var myNumber=42;
var myName="wejdan";

var temp=myNumber;
myNumber=myName;
myName=temp;

console.log(myName);

//////

for (var i=-52 ; i<=1066 ; i++){
    console.log(i);

}

/////
function beCheerful(){
    
    for(var i =0 ; i < 98 ; i++){ 
        console.log("Good Morning!");

}
}
beCheerful();

/////////
for (var i =-300 ; i<=0 ; i+=3){
    if (i === -3 || i=== -6){
        continue;
    }
    console.log(i);
}

var i= 2000;
while (i <= 5280){
    console.log(i);
    i++;
}

//////////
var birthMonth = 7;
var birthDay = 30;
var month = 7;
var day=30;
if(birthMonth === month && birthDay ===day || birthMonth === day && birthDay ===month){
    console.log("How did you know");
} else {
    console.log("Just another day");
}

////////
function isLeapYear (year){
    if ((year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
        console.log("LeapYear")
    }
else {
    console.log("not LeapYear")
}
}
isLeapYear(2000));

//////////
var count =0;
for(var i = 512 ; i <= 4096 ; i++){
    if(i % 5 ===0){
        console.log(i);
       count++;
    }
     
}console.log("total:",count);
////////////
var i =6;
while(i <= 60000){
    console.log(i);
//     i+=6;
// }
///////////////
for (var i=1; i<=100 ; i++){
    if(i % 10 ===0){
        console.log("Dojo");
    }
else if (i%5 ===0){
    console.log("Coding")
}
else {
    console.log(i);
}
}
/////////
function inputParameter(incoming){
    console.log(incoming);
}
/////////////
console.log(0); //every negative odd value have positive value

/////////
var i = 2016;
while (i >0){
    console.log(i);
    i-=4
}
///////////
var lowNum =2;
var highNum =9;
var mult=3;
for (var i = highNum; i<= lowNum; i--){
    if(i % mult ===0 ){
        console.log (i);
    }
}
/////////////
function countDown(param1 , param2 , param3 , param4){
var i = param2;
while (i <= param3){
    if(i % param1 ===0 && i % param1 !==param4){
        console.log(i);
    }
    i++;
}
}

