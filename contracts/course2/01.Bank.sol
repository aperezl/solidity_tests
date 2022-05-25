//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bank {
  constructor() payable {}

  function incrementBalance(uint256 amount) payable public {
    require(msg.value == amount, "not match");
  }

  function withdrawBalance() public {
    payable(msg.sender).transfer(address(this).balance);
  }

  function b() public view returns (uint256) {
    return address(this).balance;
  }
}