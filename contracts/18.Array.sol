// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Array {
  uint[] public nums = [1, 2, 3];
  uint[3] public numsFixed = [4, 5, 6];



  function pushNum() external {
    nums.push(4);
  }

  function deleteNum() external {
    delete nums[1];
  }

  function popNum() external {
    nums.pop();
  }

  function lengthNum() external view returns (uint) {
    return nums.length;
  }

  function inMemoryArray() external pure returns(uint[] memory) {
    uint[] memory a = new uint[](5);
    a[0] = 1;
    a[1] = 2;
    a[2] = 3;
    return a;
  }

  function getNums() external view returns(uint[] memory) {
    return nums;
  }

}