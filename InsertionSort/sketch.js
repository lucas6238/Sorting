/*
Lucas Chacon 
Insert Sort
2/5/2018
*/
var nodesX = [];
var nodesY = [];
displayY = [];
var iCounter = 0;
var dCounter = 0;

function setup() {
  //noLoop();
  //frameRate(10);
  createCanvas(300,300);
  for(var i = 0;i<50;i++){
    
    nodesY[i] = map(i,0,50,0,300);
    nodesX[i] = i;
    
  }
  for(var j = 0;j<1000;j++){
    displayY[j]=[];
  for(var q = 0;q<50;q++){
      displayY[j][q]= q;
    }
  }
  
  
  arrShuffle(nodesY);
  insertSort(nodesY);
console.log(displayY.length);
console.log(iCounter);
}

function draw() {

   background(255);
  
 //render the array
 if(dCounter>=iCounter){
   for(var j =0;j<displayY.length;j++){
    fill(300-displayY[iCounter-1][j],0,displayY[iCounter-1][j]);
    rect(nodesX[j]*6,displayY[iCounter-1][j],6,300);
   }
 }
 else{
  for(var i =0;i<displayY.length;i++){
    fill(300-displayY[dCounter][i],0,displayY[dCounter][i]);
    rect(nodesX[i]*6,displayY[dCounter][i],6,300);
  }
 }
  dCounter++;
   if(dCounter >iCounter+35){
    dCounter=0;
  }
}



function insertSort(arr){
   //Finds the lowest value to use as the inital starting point
  var lowest =0;
  for(var f = arr.length-1;f>-1;f--){
    if(arr[f] < arr[lowest]){
      lowest = f;
    } 
  }
  // console.log(nodesY[lowest] + " is the lowest")
  swap(arr,f,0);
  
   //sort the array
   var j;
  for(var i=2;i<arr.length;i++){
     j=i;
    var v = arr[i];
    while((arr[j]>arr[j-1])&&j>0){
      swap(arr,j,j-1); 
      arrayCopy(nodesY,0,displayY[iCounter],0,displayY[iCounter].length);
      j--;
      iCounter++; 
    }
    arr[j] = v;
    
   
    
    }
}




function arrShuffle(arr){
  var choosen =0;
  for(var s = 0;s<arr.length;s++){
   // console.log("s "+s);
    choosen = floor(random(arr.length));
    // console.log("choosen "+choosen);
    swap(arr,s,choosen);
   
  }
}
function swap(arr, one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}
function mousePressed(){
  redraw();
}
