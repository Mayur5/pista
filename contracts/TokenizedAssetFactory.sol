pragma solidity ^0.4.18;

import "./TokenizedAsset.sol";

/**
  * An Asset(Token) Factory Contract to generate arbitrary assets/tokens
**/
contract TokenizedAssetFactory  is TokenizedAsset {
    string[] public names;
    address[] public contracts;

    /**
     * Method to call the token constructor and save the name of the token and it's contract address
     *
     * @param _name    The name of the token to be created
     * @param _symbol    The symbol of the token to be created
     */
    function createAssetContract(string name, string symbol) returns(address) {
        address assetContractAddr = new TokenizedAsset(name, symbol);
        names.push(name);
        contracts.push(assetContractAddr);

        return newContract;
    }

    /**
     * Method to fetch a specific asset's name
     *
     * @param _i    Index to be fetched
     */
    function getName(uint i) constant returns(string) {
        return names[i];
    }

    /**
     * Method to fetch a specific asset's contract address
     *
     * @param _i    Index to be fetched
     */
    function getAddress(uint i) constant returns(address) {
        return contracts[i];
    }
}
