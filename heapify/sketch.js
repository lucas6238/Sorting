var arrY =[];
var arrX=[];
var heap1 = [];
var sArray = [];
var displayY = [];
var sChange =6;
var heapCounter=0;
var counter=0;
//start with a shuffled array
function setup() {
  //noLoop();
  //frameRate(15);
  createCanvas(400,600);
  for(var i=0;i<50;i++){
    arrY[i]=i*sChange;
    arrX[i]=i*sChange;
    
  }
  arrShuffle(arrY);
  for(var q =0;q<1000;q++){
    displayY[q]=[];
     for(var z =0;z<50;z++){
    displayY[q][z]= arrY[i];
  }
  }
  //arrShuffle(arrY);
 // arrayCopy(arrY,0,heap1,0,heap1.length);
  heapSort(arrY,heap1);
  //console.log(inLoopCounter);
}
function draw() {
  background(255);
  if(counter>=heapCounter){
    for(var i = 0;i<displayY.length;i++){
      fill(map(displayY[heapCounter-1][i],0,299,0,255),0,
    (map(displayY[heapCounter-1][i],0,299,255,0)));
    //rect(arrX[i],displayY[heapCounter-1][i],6,300);
    rect(arrX[i],300,sChange,-displayY[heapCounter-1][i]); 
    }
  }
  else{
  for(var j = 0;j<displayY[counter].length;j++){
    fill(map(displayY[counter][j],0,299,0,255),0,
    (map(displayY[counter][j],0,299,255,0)));
    rect(arrX[j],300,sChange,-displayY[counter][j]);  
    //rect(arrX[j],600,sChange,-heap1[counter]); 
    //rect(arrX[j],600,sChange,-sArray[j]);
    }
   
  }
counter++;
  if(counter >heapCounter+30){
    counter=0;
  }
 }
function heapSort(arr,heap){
 heapifyB(arr,heap);
 heapifyT(heap);

}

function heapifyT(arr){
  //copy number in slot 0 to array sArray
  
  var end = arr.length;
  var stop =end-1;
 for(var i=0;i<end;i++){
   //sArray.push(arr[0]);
   //swap(arr,0,arr.length-1);
   swap(arr,0,stop);
  arrayCopy(arr,0,displayY[heapCounter],0,displayY[heapCounter].length);
  
   heapCounter++;
   moveDown(arr,0,stop);
   stop--;
 }
}
function moveDown(arr, parent,stop){
 
 
 var hcounter=0;
 var end =stop;
 var child =  findChild(arr,parent,end);

 while(child<end){
   console.log("child "+ child+" end "+end);
  if(arr[child]>arr[parent]){ 
    
    //console.log("swap p "+" "+arr[parent]  + " c " +" child "+arr[child] );
     
    swap(arr,child,parent);
    arrayCopy(arr,0,displayY[heapCounter],0,displayY[heapCounter].length);
    heapCounter++;
    parent =child;
   
    }
    
    child = findChild(arr,child,end);
     //console.log("swap p "+parent+" "+arr[parent]  + " c "+child +" child "+arr[child] );
   // console.log(child+ " "+arr[child]);
    hcounter++;
    if(hcounter>1000){
      //console.log("allow me");
      break;
    }
 }
  //console.log(parent+" "+child+ " "+ end);
  
}
function findChild(arr,a,end){ 
  
  
  var child1 = (a+1)*2;
  var child2 = child1;
  child1--;
  if(child2 < end){
    //then we know that child1 is within range
    //see if child2 is larger choose that one
    if(arr[child1]<arr[child2]){
      return child2;
    }
    else{
      return child1;
    }
  }
  else{
    if(child1 < end){
      return child1;
    }
    else{
      //neither child is within range exit
      return end;
    }
  }
  
}

function heapifyB(arr,heap){
  //console.log(arr.length);
  for(var i = 0;i<arr.length;i++){
    //console.log(i);
   heap[i] = arr[i];
  //console.log("insert"+ heap[i]);
  for(var q=heap.length-1;q>=0;q--){
    //console.log(q);
    moveUp(heap, q);
    }
 }
}
function moveUp(arr, child){
  //console.log("Child"+child);
  var parent = findParent(child);
  //console.log(parent);
 //console.log("c index is "+ child+" the p index "+parent);

  var il =0;
  while(parent>=0){
    if((arr[parent] < arr[child])){
      //console.log( "the parent "+parent+ " "+arr[parent] + " is  less than child"+child+" "+ arr[child]);
      
    
    arrayCopy(arrY,0,displayY[heapCounter],0,arrY.length);
    arrayCopy(arr,0,displayY[heapCounter],0,displayY[heapCounter].length);
    swap(arr,parent,child);
    heapCounter++;
    parent = findParent(parent);
    }
    else{
      //console.log("c index is "+ child+ " the parent "+arr[parent] + " is not less than"+ arr[child]);
      parent=-1;
    }
    il++;
    if(il>1000){
      break;
    }
  }
}
function findParent(a){
  //console.log(a);
  var k = a+1;
  var parent = floor(k/2);
  //console.log("p "+parent + " child "+k);
  parent --;
  return parent;
}
function swap(arr, a,b){
  var temp = arr[a];
   arr[a] = arr[b];
  arr[b] = temp;
 //console.log(a+" swapped for "+b);
}
function arrShuffle(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = floor(random(arr.length));
    swap(arr,s,choosen);
   //console.log(arr[s]);
  }
  //arrayCopy(arr,0,displayY[heapCounter],0,displayY[heapCounter].length);
}
function mousePressed(){
  redraw();
}
