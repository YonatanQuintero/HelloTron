var MyContract = artifacts.require("./HelloTron.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
