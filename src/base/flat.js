function flat(arr){
  arr.forEach((value, index, array) => {
    if(value instanceof Array){
      array.splice(index, index + 1, ...flat(arr[index]));
    }
  })
  return arr;
}