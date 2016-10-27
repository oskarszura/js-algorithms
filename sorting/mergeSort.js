function mergeSort(arrayToSort) {
  function merge(arrL, arrR) {
    const result = [];
    let il = 0;
    let ir = 0;

    while(il < arrL.length && ir < arrR.length) {
      if(arrL[il] > arrR[ir]) {
        result.push(arrR[ir]);
        ir++;
      } else {
        result.push(arrL[il]);
        il++;
      }
    }

    return result.concat(arrL.slice(il)).concat(arrR.slice(ir));
  }

  if(arrayToSort.length < 2) {
    return arrayToSort;
  }

  const middle = Math.floor(arrayToSort.length / 2);
  const left = arrayToSort.slice(0, middle);
  const right = arrayToSort.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([43, 2, 124, 5, 23, 32, 3, 444, 4]);
