//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract Perrera {
  address public owner;
  address public contractAddress;

  constructor() {
    owner = msg.sender;
    contractAddress = address(this);
  }

  struct User {
    string name;
    uint id;
  }

  struct Dog {
    string name;
    string breed;
    uint id;
    uint weight;
  }

  mapping(address => User) userAddress;
  mapping(address => bool) activeSubscription;
  mapping(address => bytes32) userDogAddress;
  mapping(bytes32 => Dog) hashDog;

  event subscribeUser(bool);
  event acceptedDog(bool);

  modifier onlyPerrera(address _dir) {
    require(_dir == owner, "Bad Address");
    _;
  }

  modifier onlyRegiserUser(address _dir) {
    require(activeSubscription[_dir], "User not subscribed");
    _;
  }

  function subscribe(string memory _name, uint _id, uint _price ) public {
    require(_price >= 50, "Price must be greater than 50");
    userAddress[msg.sender] = User(_name, _id);
    activeSubscription[msg.sender] = true;
    emit subscribeUser(true);
  }

  function getData() public view returns(string memory) {
    return userAddress[msg.sender].name;
  }

  function subscribeDog(
    string memory _name,
    string memory _breed,
    uint _id,
    uint _weight
  ) public onlyRegiserUser(msg.sender) {
    bytes32 hash = keccak256(abi.encodePacked(_id));
    hashDog[hash] = Dog(_name, _breed, _id, _weight);
    userDogAddress[msg.sender] = hash;
    emit acceptedDog(true);
  }

  function getDogData() public view onlyRegiserUser(msg.sender) returns(string memory) {
    bytes32 hash = userDogAddress[msg.sender];
    return hashDog[hash].name;
  }
}