var removeDuplicates = function(nums) {
  let currentIdx = 0
  let lastIdx = nums.length - 1

  while (currentIdx < lastIdx) {

    if (nums[currentIdx] === nums[currentIdx + 1]) {
      nums.splice(currentIdx, 1)
      lastIdx = nums.length - 1
    } else {
      currentIdx++
    }
  }

  return nums.length, nums
}

var removeDuplicates2 = function(nums) {
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < nums.length) {
    if (nums[pointer2] !== nums[pointer1]) {
      console.log({'pointer1+1': pointer1+1, 'pointer2': pointer2, 'nums[pointer1+1]':nums[pointer1+1], 'nums[pointer2]': nums[pointer2]})

      nums[pointer1+1] = nums[pointer2];
      pointer1++;
    }
    pointer2++;
  }
  nums.splice(pointer1 + 1, nums.length-1);
  return nums
};

console.log(removeDuplicates([0,0,1,1,1,2,2,2,3,3,4]))
console.log(removeDuplicates2([0,0,1,1,1,2,2,2,3,3,4]))