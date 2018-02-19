/*
 Lucas Chacon 
 Quick Sort 
 2/11/2018
 */

var arrY = [];
var arrX = [];
var displayY = [];
var msCounter = 0;
var counter = 0;
var inLoopCounter = 0;
var displayTemp = [];
function setup() {
    createCanvas(300, 300);
    frameRate(15);

    for (var i = 0; i < 50; i++) {
        arrY[i] = i * 6;
    }
    for (var y = 49; y > -1; y--) {
        arrX.push(y * 6);
    }
    for (var q = 0; q < 1000; q++) {
        displayY[q] = [];
        for (var z = 0; z < 50; z++) {
            displayY[q][z] = z;
        }
    }
    arrShuffle(arrY);
    quickSort(arrY, 0, arrY.length - 1);
}
function draw() {
    background(255);
    if (counter >= msCounter) {
        for (var i = 0; i < displayY.length; i++) {
            fill(map(displayY[msCounter - 1][i], 0, 255, 255, 0), 0,
                    (map(displayY[msCounter - 1][i], 0, 255, 0, 255)));
            rect(arrX[i], displayY[msCounter - 1][i], 6, 300);
        }
    } else {
        for (var j = 0; j < displayY.length; j++) {
            fill(map(displayY[counter][j], 0, 255, 255, 0), 0,
                    (map(displayY[counter][j], 0, 255, 0, 255)));
            rect(arrX[j], displayY[counter][j], 6, 300);
        }
    }
    counter++;
    if (counter > msCounter + 30) {
        counter = 0;
    }
}

function quickSort(arr, lo, hi) {
    if (lo < hi) {
        var q = partition(arr, lo, hi);
        quickSort(arr, lo, q - 1);
        quickSort(arr, q + 1, hi);
    } else {
        return;
    }
}

function partition(arr, lo, hi) {

    var pivot = arr[hi];
    var i = lo - 1;
    var r = hi;
    var j = r;

    while (true) {
        while (arr[++i] < pivot)
            ;
        while (pivot < arr[--j]) {
            if (j === lo) {
                break;
            }
        }
        if (i >= j)
            break;
        swap(arr, i, j);
        arrayCopy(arrY, 0, displayY[msCounter], 0, displayY[msCounter].length);
        msCounter++;
    }
    swap(arr, i, r);
    arrayCopy(arrY, 0, displayY[msCounter], 0, displayY[msCounter].length);
    msCounter++;
    return i;
}


function swap(arr, one, two) {
    var temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;

}
function arrShuffle(arr) {
    for (var s = 0; s < arr.length; s++) {
        var choosen = floor(random(arr.length));
        swap(arr, s, choosen);
        //console.log(arr[s]);
    }
}
