//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bank {
  address owner;

  constructor() payable {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner, "not owner");
    _;
  }

  function incrementBalance(uint256 amount) payable public {
    require(msg.value == amount, "not match");
  }

  function withdrawBalance() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }

  function newOwner(address _address) public onlyOwner {
    owner = _address;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }
}