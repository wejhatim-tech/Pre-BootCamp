function makeItBig (arr){
    for (var i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i] ="Big";
        }
    
    } return arr;
}
/////////////

function printLowReturnHigh (arr){
    var low = arr[0];
    var high = arr[0];
    for (var i =0; i<arr.length;i++){
        if (arr[i]< low){
            low=arr[i];
        }
     if (arr[i]>high){
        high=arr[i];
    }
  }  console.log(low);
    return high;

}
//////////////////////
function secondToLastReturnFirstOdd (arr){
    console.log(arr[arr.length-2]);
for (var i =0; i<arr.length;i++){
    if (arr[i] % 2 !==0){

 return arr[i];
}
}
}
////////////////////////

function doubled(arr){
    var newArray=[];
    for(var i=0; i<arr.length;i++){
        newArray.push(arr[i]*2);
    }
return newArray;
}

///////////////
function countPositive(arr){
    var count=0;
    for (var i =0;i<arr.length;i++){
        if (arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1]=count;
    return arr;
}
//////////////////////
function evenOdd(arr){
    var evenCount = 0;
    var oddCount = 0;
    for(var i =0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            evenCount++;
            oddCount=0;
        }
        else {
            oddCount++;
            evenCount=0;
        }
    
    if (evenCount ==3){
        console.log("Even more so!");
    }
    else if (oddCount==3){
       
            console.log("That's odd");
        }
    }
}
///////////////////   
function addOneToOdd(arr){
    for(var i=0;i<arr.length;i++){
        if(i % 2 !==0){
            arr[i]=arr[i]+1;
        }
    }
    console.log(arr[i]);
    return arr;
}
////////////////////
function prevLength(arr){
    for (var i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
///////////////
function addSeven(arr){
    var newArray =[];
    for(var i=1; i<arr.length;i++){
        newArray.push(arr[i]+7);
    }
return newArray;
}
////////////

function reverse(arr){
for (var i=0; i<arr.length/2;i++){
    var temp = arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
return arr;
}
////////////
funvtion makeNegative(arr){
var newArray=[];
for (var i=0;i<arr.length;i++){
    if(arr[i]>0){
        newArray.push(-arr[i]);
    } else {
        newArray.push(arr[i]);
    }
} retur newArray;
}
////////////////////

function chechFood(arr){
var count =0;
for(var i=0;i<arr.length;i++){
    if(arr[i] === "food"){
        console.log("Yummy");
    count++;
    }
if (count ===0){
    console.log("I'm Hungry")
}
}
}
//////////////////////

function swapSelective(arr){
    for(var i=0;i<arr.length;i+=2){ 
        var temp = arr[i];
        arr[i]=arr[arr.lenght-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
/////////////////////////
function multipl(arr,num){
    for(vari=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
    }
return arr;
}