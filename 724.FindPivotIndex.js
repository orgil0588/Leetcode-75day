var pivotIndex = function (nums) {
  let sum = 0,
    lsum = 0;

  for (x of nums) sum += x;
  for (let i = 0; i < nums.length; i++) {
    if (lsum == sum - lsum - nums[i]) return i;
    lsum += nums[i];
  }

  return -1;
};

const case1 = [1, 7, 3, 6, 5, 6];
const case2 = [1, 2, 3];
const case3 = [2, 1, -1];

console.log(pivotIndex(case1));
console.log(pivotIndex(case2));
console.log(pivotIndex(case3));

// Result
// 3
// -1
// 0
