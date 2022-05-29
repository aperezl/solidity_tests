//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface ICoin {
  function decimals() external view returns(uint8);
  function balanceOf(address _address) external view returns(uint256);
  function transfer(address _to, uint256 _value) external returns(bool success);
}

contract TokenSale {
  address owner;
  uint256 price;
  ICoin myCoinContract;
  uint256 tokensSold;

  event Sold(address _buyer, uint256 amount);

  constructor(uint256 _price, address _addressContract) {
    owner = msg.sender;
    price = _price;
    myCoinContract = ICoin(_addressContract);
  }

  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    require(c / a == b);
    return c;
  }

  function buy(uint256 _numTokens) public payable {
    require(msg.value == mul(price, _numTokens), "incorrect value");
    uint256 scaledAmmount = mul(_numTokens, uint256(10) ** myCoinContract.decimals());
    require(myCoinContract.balanceOf(address(this)) >= scaledAmmount, "not enough balance");
    tokensSold += _numTokens;
    require(myCoinContract.transfer(msg.sender, scaledAmmount));
    emit Sold(msg.sender, _numTokens);
  }

  function endSold() public {
    require(msg.sender == owner, "only owner can end sale");
    require(myCoinContract.transfer(owner, myCoinContract.balanceOf(address(this))));
  }
}