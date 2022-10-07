// N^2 runtime sorting algorithms

// First, let's make sure you understand all the common N^2 runtime sorting algorithms: Insertion Sort, Selection Sort and Bubble Sort. Watch these videos for a review of each:


//steps
//1) parse through the array
//2) create index min variable
//3) loop through array again and check if there is another value < min variable, if true min variable = current index
//4) once we parse full array, if min val is found, swap
// *need to create var to hold value for swapping

function selectionSort(array){
    for(let i = 0; i < array.length -1; i++){
        let indexMin = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
        }
        
        if(indexMin != i){
            let swapItem = array[i];
            array[i] = array[indexMin];
            array[indexMin] = swapItem;
        }

        }
   
    return array;
}

// function swap(arrayi,arrayindexMin) {
//     console.log("swap function taking in : ", arrayi, " ", arrayindexMin);
//             let swapItem = arrayi;
//             arrayi = arrayindexMin;
//             arrayindexMin = swapItem;
//             console.log("swap function after swap: ", arrayi, " ", arrayindexMin);
// }

console.log(selectionSort([1,3,6,2,8]));


function selectionSort1(array){

    for(let i = 0; i < array.length -1; i++){
        let indexMin = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
        }
        
        if(indexMin != i){
            array = swap1(array, i, indexMin)
        }

        }
   
    return array;
}

// function swap1(arrayi,arrayindexMin) {s
//             let swapItem = arrayi;
//             arrayi = arrayindexMin;
//             arrayindexMin = swapItem;
//             return [arrayi, arrayindexMin];
// }

function swap1(arr, indexMax, indexMin) {
    let swapItem = arr[indexMax];
    arr[indexMax] = arr[indexMin];
    arr[indexMin] = swapItem;
    return arr;
}


console.log(selectionSort1([1,3,6,2,8]));