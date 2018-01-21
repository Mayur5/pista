pragma solidity ^0.4.18;

//import './token/StandardToken.sol';
import './token/BurnableToken.sol';
import './token/MintableToken.sol';
//import './ownership/Ownable.sol';
import './math/SafeMath.sol';

contract TokenizedAsset is BurnableToken, MintableToken {

    string  public name;
    string  public symbol;
    uint8   public constant decimals = 18;

    function TokenizedAsset (string _name, string _symbol) {
        name = _name;
        symbol = _symbol;
    }

}

contract TokenizedAssetFactory {
    string[] public names;
    address[] public contracts;

    mapping (string => address) AssetNameAddressMapping;

    function createContract(string name, string symbol) returns(address) {
        address newContract = new TokenizedAsset(name, symbol);
        names.push(name);
        contracts.push(newContract);
        return newContract;
    }

    function getName(uint i) constant returns(string contractName) {
        return names[i];
    }

    function getAddress(uint i) constant returns(address contractAddress) {
        return contracts[i];
    }
}
