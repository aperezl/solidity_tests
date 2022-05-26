//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Lottery {
  address internal owner;
  uint256 internal num;
  uint256 public winningNum;
  uint256 public price;
  bool public game;
  address public winner;

  constructor (uint256 _winningNum, uint256 _price) {
    owner = msg.sender;
    num = 0;
    winningNum = _winningNum;
    price = _price;
    game = true;
  }

  function checkCorrect(uint256 _num) private view returns(bool) {
    if (_num == winningNum) {
      return true;
    } else {
      return false;
    }
  }

  function randomNum() private view returns(uint256) {
    return uint256(keccak256(abi.encode(block.timestamp , msg.sender, num))) % 10;
  }

  function participate() external payable returns(bool result, uint256 wNum) {
    require(game == true, "game is not started");
    require(msg.value == price, "not enough money");
    uint256 userNum = randomNum();
    bool success = checkCorrect(userNum);
    if (success == true) {
      game = false;
      payable(msg.sender).transfer(address(this).balance - (num * (price / 2)));
      winner = msg.sender;
      result = true;
      wNum = userNum;
    } else {
      num++;
      result = false;
      wNum = userNum;
    }
    return (result, wNum);
  }

}