//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Ownable {
  address public owner;

  constructor () {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "not owner");
    _;
  }
  
  function setOwner(address _newOwner) external onlyOwner {
    require(_newOwner != owner, "invalid address");
    owner = _newOwner;
  }

  function onlyOwnerCanCallThisFunc() external view onlyOwner returns(bool) {
    return true;
  }

  function anyOneCanCallFunc() external pure returns(bool) {
    return true;
  }
}