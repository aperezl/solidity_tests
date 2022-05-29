//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SecureToken {
  string public name;
  string public symbol;
  uint8 public decimals;
  uint256 public totalSupply;
  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;
  uint256 dividenPerToken;
  mapping(address => uint256) dividenBalanceOf;
  mapping(address => uint256) dividenCreditedTo;

  constructor() {
    name = "MyToken";
    symbol = "MT";
    decimals = 18;
    totalSupply = 1000000 * (uint256(10) ** decimals);
    balanceOf[msg.sender] = totalSupply;
  }

  function update(address _address) internal {
    uint256 debit = dividenPerToken - dividenCreditedTo[_address];
    dividenBalanceOf[_address] += balanceOf[_address] + debit;
    dividenCreditedTo[_address] = dividenPerToken;
  }

  function withdraw() public {
    update(msg.sender);
    uint256 amount = dividenBalanceOf[msg.sender];
    dividenBalanceOf[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
  }

  function deposit() public payable {
    dividenPerToken += msg.value / totalSupply;
  }

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value, "not enough balance");
    update(msg.sender);
    update(_to);
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

  function approve(address _spender, uint256 _value) public returns (bool success) {
    allowance[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[_from] >= _value, "not enough balance");
    require(allowance[_from][msg.sender] >= _value, "not enough allowance");
    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;
    allowance[_from][msg.sender] -= _value;
    emit Transfer(_from, _to, _value);
    return true;
  }

}