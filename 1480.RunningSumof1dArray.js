var runningSum = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let dummy = 0;
    for (let j = 0; j <= i; j++) {
      dummy += nums[j];
    }
    arr.push(dummy);
  }
  return arr;
};

const case1 = [1, 2, 3, 4];
const case2 = [1, 1, 1, 1, 1];

console.log(runningSum(case1));
console.log(runningSum(case2))

    // Result
// [ 1, 3, 6, 10 ]
// [ 1, 2, 3, 4, 5 ]
