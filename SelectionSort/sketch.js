var nodesX = [];
var nodesY = [];
var counter = 0;
var sCounter=0;
displayY = [];
function setup() {
  frameRate(12);
  createCanvas(300,300);
  for(var i = 0;i<50;i++){
    nodesY[i] = i*6;
    nodesX[i] = i;
  }
  for(var q =0;q<500;q++){
     displayY[q]=[];
     for(var z =0;z<50;z++){
    displayY[q][z]=z;
  }
  }
  //shuffle the nodesY array
  arrayShuffle(nodesY);
  selectionSort(nodesY);
  console.log(sCounter);
}
function selectionSort(arr){
   //sort the array
  for(var i=0;i<arr.length;i++){
    var low=i;
    for(var j=i+1;j<arr.length;j++){
      //console.log(i + " "+j);
      if((arr[j] > arr[low]) &&  (j != low)){
        low = j; 
         
      } 
    }
    //how do i run this once every draw cycle
     swap(arr,i,low);
     arrayCopy(nodesY,0,displayY[sCounter],0,displayY[sCounter].length);
          
        sCounter++;
    // console.log(sCounter);
     //break;
     
     
  }
}

function draw() {

   background(255);
  // for(var dloop =0;dloop<nodesY.length;dloop++){
   
  //   fill(255,0,0);
  //   rect(nodesX[dloop]*6,nodesY[dloop],6,300);
    
  // }if(counter < height){
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
//console.log(counter);
if(counter >sCounter+25){
    counter=0;
  }
  }


function swap(arr,one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}

function arrayShuffle(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = floor(random(arr.length));
    swap(arr,s,choosen);
  }
  //console.log("array is shuffled with length "+arr.length);
}