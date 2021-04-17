pragma solidity >=0.4.23 <0.6.0;

contract HelloTron {
  address public owner;
  string private name;

  constructor() public {
    owner = msg.sender;
    name = 'Anonymus';
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setName(string memory _name)  public{
      name = _name;
  }

  function greetings() public view returns (string memory){
      return string(abi.encodePacked('Hello ',name));
  }
  
}