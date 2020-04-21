var nums = [1, 4, 7];

function getAvg(nums) {
    const total = nums.reduce((acc, curr) => acc + curr);
    return total / nums.length;
  };
  const average = getAvg(nums);
  console.log(average);