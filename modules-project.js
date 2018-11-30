
function myFlatten (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(myFlatten(arr[i]));
    } else {
      result.push(arr[i])
    }
  };

  return result;
}

// let mtx = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//   ]
//
// console.log(myFlatten(mtx));

module.exports.myFlatten = myFlatten;
