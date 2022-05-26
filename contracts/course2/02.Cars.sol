//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Cars {
  address owner;
  uint256 price;
  uint256[] ids;

  struct Car {
    uint256 id;
    string brand;
    uint32 cv;
    uint32 km;
  }

  mapping(address => Car) cars;

  modifier filterPrice(uint256 _price) {
    require(price == _price, "not match");
    _;
  }

  constructor(uint256 _price) {
    owner = msg.sender;
    price = _price;
  }

  function addCar(
    uint256 _id,
    string memory _brand,
    uint32 _cv,
    uint32 _km
  ) external payable filterPrice(msg.value) {
    ids.push(_id);
    cars[msg.sender] = Car(_id, _brand, _cv, _km);
  }

  function getIds() external view returns(uint256) {
    return ids.length;
  }

  function getCar() external view returns(string memory brand, uint32 cv, uint32 km) {
    brand = cars[msg.sender].brand;
    cv = cars[msg.sender].cv;
    km = cars[msg.sender].km;
  }

}