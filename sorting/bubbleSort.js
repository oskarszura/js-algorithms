function bubbleSort(arrayToSort) {
  while(true) {
    let shouldSwapCounter = 0;

    for(let i = 1; i < arrayToSort.length; i++) {
      if(arrayToSort[i-1] > arrayToSort[i]) {
        [arrayToSort[i-1], arrayToSort[i]] = [arrayToSort[i], arrayToSort[i-1]];
        shouldSwapCounter++;
      }
    }

    if(!shouldSwapCounter) break;
  }

  return arrayToSort;
}

bubbleSort([43, 2, 124, 5, 23, 32, 3, 444, 4]);