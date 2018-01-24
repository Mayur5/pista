var SafeMath = artifacts.require("./math/SafeMath.sol");
var ERC20 = artifacts.require("./token/ERC20.sol");
var ERC20Basic = artifacts.require("./token/ERC20Basic.sol");
var BurnableToken = artifacts.require("./token/BurnableToken.sol");
var BasicToken = artifacts.require("./token/BasicToken.sol");
var StandardToken = artifacts.require("./token/StandardToken.sol");
var Ownable = artifacts.require("./ownership/Ownable.sol");
var Mintable = artifacts.require("./token/MintableToken.sol");
var TokenizedAssetFactory = artifacts.require("./TokenizedAssetFactory.sol");
var TokenizedAsset = artifacts.require("./TokenizedAsset.sol");
var Departments = artifacts.require("./Departments.sol");
var Sources = artifacts.require("./Sources.sol");
var Convert = artifacts.require("./Convert.sol");

module.exports = function(deployer, accounts) {
    deployer.deploy(SafeMath);
    deployer.deploy(Ownable);
    deployer.link(Ownable, Mintable);
    deployer.deploy(Mintable, {gas: 3000000});

    deployer.deploy(BasicToken, {gas: 500000});
    deployer.link(BasicToken, SafeMath);
    deployer.link(BasicToken, ERC20Basic);

    deployer.deploy(StandardToken, {gas: 3000000});
    deployer.link(StandardToken, BasicToken);

    deployer.deploy(TokenizedAsset, {gas: 3000000});
    deployer.link(TokenizedAsset, StandardToken);
    deployer.link(TokenizedAsset, BurnableToken);
    deployer.link(TokenizedAsset, Mintable);
    deployer.link(TokenizedAsset, SafeMath);

    deployer.deploy(TokenizedAssetFactory, {gas: 4500000});
    deployer.link(TokenizedAssetFactory, TokenizedAsset);

    deployer.deploy(Departments, {gas: 3000000});
    deployer.link(Departments, SafeMath);
    deployer.link(Departments, TokenizedAsset);

    deployer.deploy(Sources, {gas: 3000000});
    deployer.link(Sources, SafeMath);
    deployer.link(Sources, TokenizedAsset);

    deployer.deploy(Convert, {gas: 3000000});
    deployer.link(Convert, SafeMath);
    deployer.link(Convert, TokenizedAsset);

};
