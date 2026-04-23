function countDown (num){
    var arr =[];
    for(var i =num ; i>=0 ; i--){
        arr.push(i);
    }
    return arr;
}
//////////////

function printFirstReturnSecond (arr){
console.log (arr[0]);
return arr[1];
}
//////////////

function firstPlusLength (arr){
    return arr[0]+arr.length;
}
console.log(firstPlusLength([1 , 2 , 3 , 4 , 5 , 6])); // 7
console.log(firstPlusLength(["what" , 2 , 3 , 4 , 5 , 6])); // what6
console.log(firstPlusLength([false , 2 , 3 , 4 , 5 , 6])); //6
////////////////
function printGreaterThanSecond(arr){
    var count = 0;
    var second = arr[1];
    for (var i=0 ; i<arr.length ; i++){
    if(arr[i]>second){
        console.log(arr[i]);
    }
    }count++;
return count;
}

/////////////
function valuesGreaterThanSecond(arr){
    if (arr.length <2){
        console.log("too short");
return[];
    }
    var result =[];
    var second = arr[1];
    for(var i =0; i< arr.length ; i++){
        if(arr[i]>second){
        result.push(arr[i]);
        }
    }
    console.log(result.length);
return result;
//////////////////
function makeArray(num1,num2){
    if(num1===num2){
        console.log("Jinx");
    }
    var arr=[];
    for(var i=0; i<num1;i++){
        arr.push(num2);
    }
    return arr;
}
/////////////////
function checkSize(arr){
    if(arr[0]>arr.length){
        console.log("Too Big");
    }
    else if (arr[0]<arr.length){
        console.log("Too Small");
    }
    else{
        console.log("Just Right");
    }
}
////////////////
function fahToC(f){
    return (f-32)*5/9;
}
////////////
function cToFah(C){
    return (9/5*c)+32;
}
////////////