/*
Lucas Chacon 
Merge Sort 
2/11/2018
*/

var arrY=[];
var arrX=[];
var displayY = [];
var msCounter =0;
var counter =0;
var inLoopCounter =0;
var displayTemp = [];
function setup() {
  createCanvas(300,300);
 //frameRate(12);
  
  for(var i = 0;i<50;i++){
    
    arrX[i]=i*6;
    arrY[i]=i*6;
   
    //arrShuffle(displayY[i]);
  }
  
   for(var q =0;q<1000;q++){
    displayY[q]=[];
     for(var z =0;z<50;z++){
    displayY[q][z]=z;
  }
  }
 
  arrShuffle(arrY);
  mergeSort(arrY,0,arrY.length-1);
  console.log(inLoopCounter);
}

function draw() {
  background(255);
  if(counter>=msCounter){
    for(var i = 0;i<displayY.length;i++){
      fill(map(displayY[msCounter-1][i],0,299,255,0),0,
    (map(displayY[msCounter-1][i],0,299,0,255)));
     rect(arrX[i],displayY[msCounter-1][i],6,300);
    }
  }
  else{
  for(var j = 0;j<displayY.length;j++){
    fill(map(displayY[counter][j],0,255,255,0),0,
    (map(displayY[counter][j],0,255,0,255)));
    rect(arrX[j],displayY[counter][j],6,300);  
    }
  }
counter++;
  if(counter >msCounter+30){
    counter=0;
  }
}
function mergeSort(arr,lo,hi){
  if(hi<=lo){ 
    return;}
  else{
  var mid= floor((hi+lo)/2);
  mergeSort(arr,lo,mid);
  mergeSort(arr,mid+1,hi);
  merge(arr,lo,mid,hi);
  }
}
function merge(arr,lo,mid,hi){
  var i;
  var j;
  var temp =[];
   for(i=mid+1;i>lo;i--){ temp[i-1]      = arr[i-1];}
   for(j=mid;j<hi;j++){   temp[hi+mid-j] = arr[j+1];}
   for(var k=lo;k<=hi;k++){
    if(temp[j]>temp[i]){ 
      arr[k] = temp[j];
      j--;
      arrayCopy(arrY,0,displayY[msCounter],0,displayY[msCounter].length);
      msCounter++;
     inLoopCounter++;
    }
    else{
       arrayCopy(arrY,0,displayY[msCounter],0,displayY[msCounter].length);
      msCounter++;
      inLoopCounter++;
      arr[k]= temp[i];
      i++;
    }
  }
 
}

function swap(arr, one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}
function arrShuffle(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = floor(random(arr.length));
    swap(arr,s,choosen);
   //console.log(arr[s]);
  }
}
