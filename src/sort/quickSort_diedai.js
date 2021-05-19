var quickSort = function (arr, left, right) {
  var temp = arr[left];
  while (left < right) {
    while (left < right && arr[right] >= temp) {
      right--;
    }
    arr[left] = arr[right];
    while (left < right && arr[left] < temp) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  return left;
}

var digui = function (arr, left, right) {
  if (left < right) {
    var index = quickSort(arr, left, right);
    digui(arr, left, index - 1);
    digui(arr, index + 1, right);
  }
}
var quickSortIterative = function (arr, low, high) {
  var s = [];
  s.push(low);
  s.push(high);
  while (s.length > 0) {
    var _high = s.pop();
    var _low = s.pop();
    var index = quickSort(arr, _low, _high);
    if (index - 1 > _low) {
      s.push(_low);
      s.push(index - 1);
    }
    if (index + 1 < _high) {
      s.push(index + 1);
      s.push(_high);
    }
  }
}
var test = [3, 2, 1, 4, 5, 3, 4, 5];
console.log("test", test)
quickSortIterative(test, 0, 7)
console.log(test)

let test2 = [3, 2, 1, 4, 5, 3, 4, 5];
digui(test2, 0, 7)
console.log(test2);