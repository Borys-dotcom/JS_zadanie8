let arrayToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
let arrayMemory = [];
let requredChange = true;
let tempValue = 0;
let tempValueOfIndexes = 0;
let arrayOfIndexes = [];
let outputArray = [];

for (i = 0; i < arrayToSort.length; i++){
    arrayOfIndexes[i] = i;
    arrayMemory[i] = arrayToSort[i];
}

do {
    
    requredChange = false;

    for (i = 1; i < arrayToSort.length; i++){

        if (arrayToSort[i] < arrayToSort [i-1]){

            tempValue = arrayToSort[i];
            arrayToSort[i] = arrayToSort[i-1];
            arrayToSort[i-1] = tempValue;

            tempValueOfIndexes = arrayOfIndexes[i];
            arrayOfIndexes[i] = arrayOfIndexes[i-1];
            arrayOfIndexes[i-1] = tempValueOfIndexes;

            requredChange = true; 
        }

    }

} while (requredChange)

    console.log(arrayMemory);

for (i = 0; i<arrayToSort.length; i++){
    outputArray[i] = arrayMemory[arrayOfIndexes[i]];
}

console.log(arrayToSort);
console.log(arrayOfIndexes);
console.log(outputArray);