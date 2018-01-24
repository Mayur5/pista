var SafeMath = artifacts.require("./math/SafeMath.sol");
var ERC20 = artifacts.require("./token/ERC20.sol");
var ERC20Basic = artifacts.require("./token/ERC20Basic.sol");
var BurnableToken = artifacts.require("./token/BurnableToken.sol");
var BasicToken = artifacts.require("./token/BasicToken.sol");
var StandardToken = artifacts.require("./token/StandardToken.sol");
var Ownable = artifacts.require("./ownership/Ownable.sol");
var Mintable = artifacts.require("./token/MintableToken.sol");
var TokenizedAssetFactory = artifacts.require("./TokenizedAssetFactory.sol");
var Departments = artifacts.require("./Departments.sol");
var Sources = artifacts.require("./Sources.sol");

module.exports = function(deployer, accounts) {
    deployer.deploy(SafeMath);
    deployer.deploy(Ownable);
    deployer.link(Ownable, Mintable);
    deployer.deploy(Mintable);

    deployer.deploy(BasicToken, {gas: 500000});
    deployer.link(BasicToken, SafeMath);
    deployer.link(BasicToken, ERC20Basic);

    deployer.deploy(StandardToken);
    deployer.link(StandardToken, BasicToken);

    deployer.deploy(TokenizedAssetFactory);
    //deployer.link(TokenizedAssetFactory, StandardToken);
    //deployer.link(TokenizedAssetFactory, Ownable);
    deployer.link(TokenizedAssetFactory, BurnableToken);
    deployer.link(TokenizedAssetFactory, Mintable);
    deployer.link(TokenizedAssetFactory, SafeMath);

    deployer.deploy(Departments);

    deployer.deploy(Sources);

};
