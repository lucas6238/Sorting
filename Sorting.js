
var sketch_bubble = function(sketch){
/*
Lucas Chacon 
Bubble Sort
2/5/2018
*/
var test = [];
var nodesX = [];
var nodesY = [];
displayY = [];

var counter = 2;
var sCounter =0;
sketch.setup = function() {
  //frameRate(12);
  //noLoop();
  sketch.createCanvas(300,300);
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
 
  
  
  shuffleA(nodesY);
  bubbleSort(nodesY);

}
sketch.draw = function(){

   sketch.background(255);
  
 //render the array
 if(counter>=sCounter){
    for(var i =0;i<displayY[sCounter].length;i++){
    sketch.fill(
    sketch.map(displayY[sCounter-1][i],0,255,255,0),0,
    sketch.map(displayY[sCounter-1][i],0,255,0,255));
    sketch.rect(nodesX[i]*6,displayY[sCounter-1][i],6,sketch.height); 
  }
 }
 else{
   
  for(var j =0;j<displayY.length;j++){
    //noStroke();
    sketch.fill(sketch.map(displayY[counter][j],0,255,255,0),0,
    sketch.map(displayY[counter][j],0,255,0,255));
    sketch.rect(nodesX[j]*6,displayY[counter][j],6,sketch.height); 
  }
 }
  counter++;
  
  if(counter >sCounter+25){
    counter=0;
  }
}
function bubbleSort(arr){
     //sort the array
   for(var i = 0;i<arr.length;i++){
     for(var j=arr.length-1;j>i;j--){
       if(arr[j-1] < arr[j]){
         swap(arr,j-1,j);
         sketch.arrayCopy(nodesY,0,displayY[sCounter],0,displayY[sCounter].length);
         sCounter++;
       }
     }
   }
}
function shuffleA(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = sketch.floor(sketch.random(arr.length));
    swap(arr,s,choosen);
  }
}
function swap(arr, a,b){
  //console.log(arr.length);
   var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  
}
};
var bubble = new p5(sketch_bubble,'bubble');

var sketch_shaker = function(p){
    /*
Lucas Chacon 
Shaker Sort
2/5/2018
*/

p.nodesX = [];
p.nodesY = [];
p.displayY = [];

p.counter = 2;
p.sCounter =0;
p.setup = function() {
 
  p.createCanvas(300,300);
  
  p.counter =300;
  for(var i = 0;i<50;i++){ 
    p.nodesY[i] = i*6;
    p.nodesX[i] = i; 
  }
  for(var q =0;q<1000;q++){
    p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]=z;
  }
  }
 
  
  
  p.shuffleA(p.nodesY);
  p.bubbleSort(p.nodesY);

}

p.draw = function() {

   p.background(255);
  
 //render the array
 if(p.counter>=p.sCounter){
    for(var i =0;i<p.displayY[p.sCounter].length;i++){
    //noStroke();
    p.fill(
    p.map(p.displayY[p.sCounter-1][i],0,255,255,0),0,
    p.map(p.displayY[p.sCounter-1][i],0,255,0,255));
    //map(i,0,sCounter,255,0)
    
    p.rect(p.nodesX[i]*6,p.displayY[p.sCounter-1][i],6,p.height); 
  }
 }
 else{
   
  for(var j =0;j<p.displayY.length;j++){
    //noStroke();
    p.fill(p.map(p.displayY[p.counter][j],0,255,255,0),0,
    p.map(p.displayY[p.counter][j],0,255,0,255));
    p.rect(p.nodesX[j]*6,p.displayY[p.counter][j],6,p.height); 
  }
 }
  p.counter++;
  if(p.counter >p.sCounter+25){
    p.counter=0;
  }
}

p.bubbleSort = function(arr){
 
    p.r = arr.length;
   
    for(var i = 0;i<p.r;i++){
      if(i%2 === 0){
        for(var j=p.r-1;j>i-1;j--){
          if(arr[j-1] < arr[j]){
          p.swap(arr,j-1,j );
          p.arrayCopy(p.nodesY,0,p.displayY[p.sCounter],0,p.displayY[p.sCounter].length);
        p.sCounter++;
          
          }
        }
      }
      else{
        for(var j=0;j<p.r;j++){
          if(p.nodesY[j+1] > p.nodesY[j]){
          p.swap(arr,j+1,j);
          p.arrayCopy(p.nodesY,0,p.displayY[p.sCounter],0,p.displayY[p.sCounter].length);
          p.sCounter++;
          
        }
     }
    }  
  }
     
            
           
  
}
p.shuffleA = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
    p.swap(arr,s,choosen);
  }
}
p.swap = function(arr, a,b){
  //console.log(arr.length);
   var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
};
var shaker = new p5( sketch_shaker,'shaker');

var sketch_selection = function(p){
p.nodesX = [];
p.nodesY = [];
p.counter = 0;
p.sCounter=0;
p.displayY = [];
p.setup = function() {
  p.frameRate(15);
  p.createCanvas(300,300);
  for(var i = 0;i<50;i++){
    p.nodesY[i] = i*6;
    p.nodesX[i] = i;
  }
  for(var q =0;q<500;q++){
     p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]=z;
  }
  }
  //shuffle the nodesY array
  p.arrayShuffle(p.nodesY);
  p.selectionSort(p.nodesY);
  //console.log(sCounter);
}
p.selectionSort = function(arr){
   //sort the array
  for(var i=0;i<arr.length;i++){
    p.low=i;
    for(var j=i+1;j<arr.length;j++){
      //console.log(i + " "+j);
      if((arr[j] > arr[p.low]) &&  (j != p.low)){
        p.low = j; 
         
      } 
    }
     p.swap(arr,i,p.low);
     p.arrayCopy(p.nodesY,0,p.displayY[p.sCounter],0,p.displayY[p.sCounter].length);      
        p.sCounter++; 
  }
}

p.draw = function() {

   p.background(255);
     if(p.counter>=p.sCounter){
    for(var i =0;i<p.displayY[p.sCounter].length;i++){
   
    p.fill(
    p.map(p.displayY[p.sCounter-1][i],0,255,255,0),0,
    p.map(p.displayY[p.sCounter-1][i],0,255,0,255));
    //map(i,0,sCounter,255,0)
    
    p.rect(p.nodesX[i]*6,p.displayY[p.sCounter-1][i],6,p.height); 
  }
 }
 else{
   
  for(var j =0;j<p.displayY.length;j++){
    //noStroke();
    p.fill(p.map(p.displayY[p.counter][j],0,255,255,0),0,
    p.map(p.displayY[p.counter][j],0,255,0,255));
    p.rect(p.nodesX[j]*6,p.displayY[p.counter][j],6,p.height); 
  }
 }
  
  
  p.counter++;
//console.log(counter);
if(p.counter >p.sCounter+25){
    p.counter=0;
  }
  }


p.swap = function(arr,one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}

p.arrayShuffle = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
    p.swap(arr,s,choosen);
  }
}
};
var selection = new p5(sketch_selection,'selection');

var sketch_insertion = function(p){
    /*
Lucas Chacon 
Insert Sort
2/5/2018
*/
p.nodesX = [];
p.nodesY = [];
p.displayY = [];
p.iCounter = 0;
p.dCounter = 0;

p.setup = function() {
  p.createCanvas(300,300);
  for(var i = 0;i<50;i++){
    
    p.nodesY[i] = p.map(i,0,50,0,300);
    p.nodesX[i] = i;
    
  }
  for(var j = 0;j<1000;j++){
    p.displayY[j]=[];
  for(var q = 0;q<50;q++){
      p.displayY[j][q]= q;
    }
  }
  
  
  p.arrShuffle(p.nodesY);
  p.insertSort(p.nodesY);
//console.log(p.displayY.length);
//console.log(p.iCounter);
}

p.draw =function() {

   p.background(255);
  
 //render the array
 if(p.dCounter>=p.iCounter){
   for(var j =0;j<p.displayY.length;j++){
    p.fill(300-p.displayY[p.iCounter-1][j],0,p.displayY[p.iCounter-1][j]);
    p.rect(p.nodesX[j]*6,p.displayY[p.iCounter-1][j],6,300);
   }
 }
 else{
  for(var i =0;i<p.displayY.length;i++){
    p.fill(300-p.displayY[p.dCounter][i],0,p.displayY[p.dCounter][i]);
    p.rect(p.nodesX[i]*6,p.displayY[p.dCounter][i],6,300);
  }
 }
  p.dCounter++;
   if(p.dCounter >p.iCounter+35){
    p.dCounter=0;
  }
}



p.insertSort = function(arr){
   //Finds the lowest value to use as the inital starting point
  var lowest =0;
  for(var f = arr.length-1;f>-1;f--){
    if(arr[f] < arr[lowest]){
      lowest = f;
    } 
  }
  // console.log(nodesY[lowest] + " is the lowest")
  p.swap(arr,f,0);
  
   //sort the array
   var j;
  for(var i=2;i<arr.length;i++){
     j=i;
    var v = arr[i];
    while((arr[j]>arr[j-1])&&j>0){
      p.swap(arr,j,j-1); 
      p.arrayCopy(p.nodesY,0,p.displayY[p.iCounter],0,p.displayY[p.iCounter].length);
      j--;
      p.iCounter++; 
    }
    arr[j] = v;
    }
}
p.arrShuffle = function(arr){
  var choosen =0;
  for(var s = 0;s<arr.length;s++){
   // console.log("s "+s);
    choosen = p.floor(p.random(arr.length));
    // console.log("choosen "+choosen);
    p.swap(arr,s,choosen);
  }
}
p.swap = function(arr, one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}
};
var insertion = new p5(sketch_insertion,'insertion');

var sketch_shell = function(p){
    /*
Lucas Chacon 
Shell Sort
2/5/2018
*/
p.gaps = [57,23,10,4,1];
p.nodesX = [];
p.nodesY = [];
p.displayY = [];

p.counter = 2;
p.sCounter =0;
p.setup = function() {
  p.frameRate(12);
  p.createCanvas(300,300);
  p.counter =300;
  for(var i = 0;i<50;i++){ 
    p.nodesY[i] = i*6;
    p.nodesX[i] = i; 
  }
  for(var q =0;q<1000;q++){
    p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]=z;
  }
  }
  p.shuffleA(p.nodesY);
  p.shellSort(p.nodesY,p.gaps);
}

p.draw =function() {

   p.background(255);
  
 //render the array
 if(p.counter>=p.sCounter){
    for(var i =0;i<p.displayY[p.sCounter].length;i++){
    //noStroke();
    p.fill(
    p.map(p.displayY[p.sCounter-1][i],0,255,255,0),0,
    p.map(p.displayY[p.sCounter-1][i],0,255,0,255));
    //map(i,0,sCounter,255,0)
    
    p.rect(p.nodesX[i]*6,p.displayY[p.sCounter-1][i],6,p.height); 
  }
 }
 else{
   
  for(var j =0;j<p.displayY.length;j++){
    //noStroke();
    p.fill(p.map(p.displayY[p.counter][j],0,255,255,0),0,
    p.map(p.displayY[p.counter][j],0,255,0,255));
    p.rect(p.nodesX[j]*6,p.displayY[p.counter][j],6,p.height); 
  }
 }
  p.counter++;
  //console.log(sCounter);
  if(p.counter >p.sCounter+25){
    p.counter=0;
  }
}

p.shellSort = function(arr,gaps){
 
     //sort the array
    for(var gap = 0;gap<gaps.length;gap++){
      
      var g= p.gaps[gap];
     for(var i =g; i<arr.length;i++){
       for(var j=i;j>-1;j-=g){
         if(arr[j] >arr[j-g]){
           p.swap(arr,j,j-g);
          // console.log(g);
          // console.log(sCounter);
           p.arrayCopy(p.nodesY,0,p.displayY[p.sCounter],0,p.displayY[p.sCounter].length);
          p.sCounter++;
         }
        }
     }
    }
}
p.shuffleA = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
    p.swap(arr,s,choosen);
  }
}
p.swap = function(arr, a,b){
  //console.log(arr.length);
   var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  
}
};
var shell = new p5(sketch_shell,'shell');

var sketch_quick = function(p){
    /*
Lucas Chacon 
Quick Sort 
2/11/2018
*/

p.arrY=[];
p.arrX=[];
p.displayY = [];
p.msCounter =0;
p.counter =0;
p.inLoopCounter =0;
p.displayTemp = [];
p.setup = function() {
  p.createCanvas(300,300);
  p.frameRate(15);
  
  for(var i = 0;i<50;i++){
    p.arrY[i]=i*6;
  }
  for(var y = 49;y>-1;y--){
  p.arrX.push(y*6);
  }
   for(var q =0;q<1000;q++){
    p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]=z;
  }
  }
 
  p.arrShuffle(p.arrY);
  p.quickSort(p.arrY,0,p.arrY.length-1);
  
}

p.draw = function() {
  p.background(255);
  if(p.counter>=p.msCounter){
    for(var i = 0;i<p.displayY.length;i++){
      p.fill(p.map(p.displayY[p.msCounter-1][i],0,255,255,0),0,
    (p.map(p.displayY[p.msCounter-1][i],0,255,0,255)));
     p.rect(p.arrX[i],p.displayY[p.msCounter-1][i],6,300);
    }
  }
  else{
  for(var j = 0;j<p.displayY.length;j++){
    p.fill(p.map(p.displayY[p.counter][j],0,255,255,0),0,
    (p.map(p.displayY[p.counter][j],0,255,0,255)));
    p.rect(p.arrX[j],p.displayY[p.counter][j],6,300);  
    }
  }
p.counter++;
  if(p.counter >p.msCounter+30){
    p.counter=0;
  }
}



p.quickSort = function(arr,lo,hi){
  if(lo < hi){
   
  var q = p.partition(arr,lo,hi); 
  p.quickSort(arr,lo,q-1);
  p.quickSort(arr,q+1,hi);
  }
  else{
    return;
  } 
}

p.partition = function(arr,lo,hi){
  var pivot =arr[hi];
  var i =lo -1;
  var r =hi;
  var j=r;
  
  while(true){
    while(arr[++i] < pivot);
    while(pivot<arr[--j]){if(j==lo) {break;}}
    if(i>=j) break;
    p.swap(arr, i, j);
  p.arrayCopy(p.arrY,0,p.displayY[p.msCounter],0,p.displayY[p.msCounter].length);
      p.msCounter++;
  }
  p.swap(arr,i,r);
   p.arrayCopy(p.arrY,0,p.displayY[p.msCounter],0,p.displayY[p.msCounter].length);
      p.msCounter++;
  return i;
}


p.swap = function(arr, one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}
p.arrShuffle = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
    p.swap(arr,s,choosen);
  }
}

};
var quick = new p5(sketch_quick,'quick');

var sketch_merge = function(p){
    /*
Lucas Chacon 
Merge Sort 
2/11/2018
*/

p.arrY=[];
p.arrX=[];
p.displayY = [];
p.msCounter =0;
p.counter =0;
p.inLoopCounter =0;
p.displayTemp = [];
p.setup = function() {
  p.createCanvas(300,300);
     for(var i = 0;i<50;i++){
    p.arrX[i]=i*6;
    p.arrY[i]=i*6;
   }
  
   for(var q =0;q<1000;q++){
    p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]=z;
  }
  }
 
  p.arrShuffle(p.arrY);
  p.mergeSort(p.arrY,0,p.arrY.length-1);
  //console.log(p.inLoopCounter);
}

p.draw = function() {
  p.background(255);
  if(p.counter>=p.msCounter){
    for(var i = 0;i<p.displayY.length;i++){
      p.fill(p.map(p.displayY[p.msCounter-1][i],0,299,255,0),0,
    (p.map(p.displayY[p.msCounter-1][i],0,299,0,255)));
     p.rect(p.arrX[i],p.displayY[p.msCounter-1][i],6,300);
    }
  }
  else{
  for(var j = 0;j<p.displayY.length;j++){
    p.fill(p.map(p.displayY[p.counter][j],0,255,255,0),0,
    (p.map(p.displayY[p.counter][j],0,255,0,255)));
    p.rect(p.arrX[j],p.displayY[p.counter][j],6,300);  
    }
  }
p.counter++;
  if(p.counter >p.msCounter+30){
    p.counter=0;
  }
}
p.mergeSort = function(arr,lo,hi){
  if(hi<=lo){ 
    return;}
  else{
  var mid= p.floor((hi+lo)/2);
  p.mergeSort(arr,lo,mid);
  p.mergeSort(arr,mid+1,hi);
  p.merge(arr,lo,mid,hi);
  }
  p.arrayCopy(p.arrY,0,p.displayY[p.msCounter],0,p.displayY[p.msCounter].length);
      p.msCounter++;
}
p.merge = function(arr,lo,mid,hi){
  var i;
  var j;
  var temp =[];
   for(i=mid+1;i>lo;i--){ temp[i-1]      = arr[i-1];}
   for(j=mid;j<hi;j++){   temp[hi+mid-j] = arr[j+1];}
   for(var k=lo;k<=hi;k++){
    if(temp[j]>temp[i]){ 
      arr[k] = temp[j];
      j--;
      p.arrayCopy(p.arrY,0,p.displayY[p.msCounter],0,p.displayY[p.msCounter].length);
      p.msCounter++;
      p.inLoopCounter++;
    }
    else{
       p.arrayCopy(p.arrY,0,p.displayY[p.msCounter],0,p.displayY[p.msCounter].length);
      p.msCounter++;
      p.inLoopCounter++;
      arr[k]= temp[i];
      i++;
    }
  }
 
}

p.swap = function(arr, one,two){
   var temp = arr[one];
  arr[one] = arr[two];
  arr[two] = temp;
  
}
p.arrShuffle = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
   p.swap(arr,s,choosen);
   //console.log(arr[s]);
  }
}

};
var merge = new p5(sketch_merge,'merge');

var sketch_heap = function(p){
p.arrY =[];
p.arrX=[];
p.heap1 = [];
p.sArray = [];
p.displayY = [];
p.sChange =6;
p.heapCounter=0;
p.counter=0;
//start with a shuffled array
p.setup = function() {
  //noLoop();
  //frameRate(15);
 p.createCanvas(300,300);
  for(var i=0;i<50;i++){
    p.arrY[i]=i*p.sChange;
    p.arrX[i]=i*p.sChange;
    
  }
  p.arrShuffle(p.arrY);
  for(var q =0;q<1000;q++){
    p.displayY[q]=[];
     for(var z =0;z<50;z++){
    p.displayY[q][z]= p.arrY[i];
  }
  }
  p.heapSort(p.arrY,p.heap1);
}
p.draw = function() {
  p.background(255);
  if(p.counter>=p.heapCounter){
    for(var i = 0;i<p.displayY.length;i++){
      p.fill(p.map(p.displayY[p.heapCounter-1][i],0,299,0,255),0,
    (p.map(p.displayY[p.heapCounter-1][i],0,299,255,0)));
    //rect(arrX[i],displayY[heapCounter-1][i],6,300);
    p.rect(p.arrX[i],300,p.sChange,-p.displayY[p.heapCounter-1][i]); 
    }
  }
  else{
  for(var j = 0;j<p.displayY[p.counter].length;j++){
    p.fill(p.map(p.displayY[p.counter][j],0,299,0,255),0,
    (p.map(p.displayY[p.counter][j],0,299,255,0)));
    p.rect(p.arrX[j],300,p.sChange,-p.displayY[p.counter][j]);  
    }
   
  }
p.counter++;
  if(p.counter >p.heapCounter+30){
    p.counter=0;
  }
 }
p.heapSort = function(arr,heap){
 p.heapifyB(arr,heap);
 p.heapifyT(heap);

}

p.heapifyT = function(arr){
  //copy number in slot 0 to array sArray
  
  var end = arr.length;
  var stop =end-1;
 for(var i=0;i<end;i++){
   //sArray.push(arr[0]);
   //swap(arr,0,arr.length-1);
   p.swap(arr,0,stop);
  p.arrayCopy(arr,0,p.displayY[p.heapCounter],0,p.displayY[p.heapCounter].length);
  
   p.heapCounter++;
   p.moveDown(arr,0,stop);
   stop--;
 }
}
p.moveDown = function(arr, parent,stop){
 
 
 var hcounter=0;
 var end =stop;
 var child =  p.findChild(arr,parent,end);

 while(child<end){
   console.log("child "+ child+" end "+end);
  if(arr[child]>arr[parent]){ 
    
    //console.log("swap p "+" "+arr[parent]  + " c " +" child "+arr[child] );
     
    p.swap(arr,child,parent);
    p.arrayCopy(arr,0,p.displayY[p.heapCounter],0,p.displayY[p.heapCounter].length);
    p.heapCounter++;
    parent =child;
   
    }
    
    child = p.findChild(arr,child,end);
     //console.log("swap p "+parent+" "+arr[parent]  + " c "+child +" child "+arr[child] );
   // console.log(child+ " "+arr[child]);
    p.hcounter++;
    if(p.hcounter>1000){
      //console.log("allow me");
      break;
    }
 }
  //console.log(parent+" "+child+ " "+ end);
  
}
p.findChild = function(arr,a,end){ 
  
  
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

p.heapifyB = function(arr,heap){
  //console.log(arr.length);
  for(var i = 0;i<arr.length;i++){
    //console.log(i);
   heap[i] = arr[i];
  //console.log("insert"+ heap[i]);
  for(var q=heap.length-1;q>=0;q--){
    //console.log(q);
    p.moveUp(heap, q);
    }
 }
}
p.moveUp = function(arr, child){
  //console.log("Child"+child);
  var parent = p.findParent(child);
  //console.log(parent);
 //console.log("c index is "+ child+" the p index "+parent);

  var il =0;
  while(parent>=0){
    if((arr[parent] < arr[child])){
      //console.log( "the parent "+parent+ " "+arr[parent] + " is  less than child"+child+" "+ arr[child]);
      
    
    p.arrayCopy(p.arrY,0,p.displayY[p.heapCounter],0,p.arrY.length);
    p.arrayCopy(arr,0,p.displayY[p.heapCounter],0,p.displayY[p.heapCounter].length);
    p.swap(arr,parent,child);
    p.heapCounter++;
    parent = p.findParent(parent);
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
p.findParent = function(a){
  //console.log(a);
  var k = a+1;
  var parent = p.floor(k/2);
  //console.log("p "+parent + " child "+k);
  parent --;
  return parent;
}
p.swap = function(arr, a,b){
  var temp = arr[a];
   arr[a] = arr[b];
  arr[b] = temp;
 //console.log(a+" swapped for "+b);
}
p.arrShuffle = function(arr){
  for(var s = 0;s<arr.length;s++){
    var choosen = p.floor(p.random(arr.length));
    p.swap(arr,s,choosen);
  }
} 
};
var heap = new p5(sketch_heap,'heap');