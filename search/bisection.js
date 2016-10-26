function bisectionSearch(sortedArray, findElement) {
  let minorArray = sortedArray;

  while(true) {
    let middleElement = minorArray[Math.floor(minorArray.length / 2)];

    if(minorArray.length === 0) return -1;

    if(middleElement > findElement) {
      minorArray = minorArray.splice(0, minorArray.length / 2);
    } else if(middleElement < findElement) {
      minorArray = minorArray.splice(minorArray.length / 2, minorArray.length);
    } else {
      return middleElement;
    }
  }
}

bisectionSearch([1, 2, 24, 56, 78, 90, 121, 246, 456, 1000], 1);