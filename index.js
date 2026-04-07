let arr = [1, 2, 3, 6, 7, 5];

function check(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] > arr[i]) {
        return arr[i];
      //console.log(arr[i]);
    }
  }
}
 let ans = check(arr);
 console.log(ans);
//check(arr);