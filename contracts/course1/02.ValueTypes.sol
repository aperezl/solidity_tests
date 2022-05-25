//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ValueTypes {
  bool public b = true;
  uint public u = 123;
  int public i = -123;
  int public minInt = type(int).min;
  int public maxInt = type(int).max;
  address public addr = 0x1234567890123456789012345678901234567890;
  bytes32 public b32 = 0x0000000000000000000000000000000000000000000000000000000000000000;
}