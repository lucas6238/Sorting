/*
Lucas Chacon 
Shell Sort
2/5/2018
*/
var test = [];
var gaps = [57,23,10,4,1];
var nodesX = [];
var nodesY = [];
displayY = [];

var counter = 2;
var sCounter =0;
function setup() {
  frameRate(12);
  //noLoop();
  createCanvas(300,300);
  var counter =300;
  for(var i = 0;i<50;i++){ 
    nodesY[i] = i*6;
    nodesX[i] = i; 
  }
  for(var q =0;q<1000;q++){
    displayY[q]=[];
     for(var z =0;z<50;z++){
    displayY[q][z]=z;
  }
  }
  // for(var j =0;j<20;j++){
  
 
  // }
  
  
  shuffleA(nodesY);
// for(var q=0;q<displayY[0].length;q++){
//   console.log(displayY[0][q]);
// }
   //console.log(sCounter);
 shellSort(nodesY,gaps);
  //console.log(sCounter);
}

function draw() {

   background(255);
  
 //render the array
 if(counter>=sCounter){
    for(var i =0;i<displayY[sCounter].length;i++){
    //noStroke();
    fill(
    map(displayY[sCounter-1][i],0,255,255,0),0,
    map(displayY[sCounter-1][i],0,255,0,255));
    //map(i,0,sCounter,255,0)
    
    rect(nodesX[i]*6,displayY[sCounter-1][i],6,height); 
  }
 }
 else{
   
  for(var j =0;j<displayY.length;j++){
    //noStroke();
    fill(map(displayY[counter][j],0,255,255,0),0,
    map(displayY[counter][j],0,255,0,255));
    rect(nodesX[j]*6,displayY[counter][j],6,height); 
  }
 }
  counter++;
  //console.log(sCounter);
  if(counter >sCounter+25){
    counter=0;
  }
}

function shellSort(arr,gaps){
 
     //sort the array
     var n = arr.length;
    
    for(var gap = 0;gap<gaps.length;gap++){
      
      var g= gaps[gap];
     for(var i =g; i<arr.length;i++){
       for(var j=i;j>-1;j-=g){
         if(arr[j] >arr[j-g]){
           swap(arr,j,j-g);
          // console.log(g);
          // console.log(sCounter);
           arrayCopy(nodesY,0,displayY[sCounter],0,displayY[sCounter].length);
          sCounter++;
         }
        }
     }
    }
     
            
           
  
}
function shuffleA(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = floor(random(arr.length));
    swap(arr,s,choosen);
  }
  //console.log("array is shuffled with length "+arr.length);
}
function MousePressed(){
  redraw();
}


function swap(arr, a,b){
  //console.log(arr.length);
   var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  
}