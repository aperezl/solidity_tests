//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FunctionModifier {
  bool public paused;
  uint public count;

  constructor (uint _count) {
    count = _count;
  }

  function setPause(bool _pause) external {
    paused = _pause;
  }

  modifier whenNotPause() {
    require(!paused, "counter is paused");
    _;
  }

  modifier cap(uint _x) {
    require(_x < 100, "x >= 100");
    _;
  }

  modifier sandwich() {
    count += 10;
    _;
    count *= 2;
  }

  function inc() external whenNotPause {
    count += 1;
  }

  function dec() external whenNotPause {
    count -= 1;
  }

  function incBy(uint _x) external whenNotPause cap(_x) {
    count += _x;
  }

  function foo() external sandwich {
    count += 1;
  }

  function getCount() external view returns (uint) {
    return count;
  }

}