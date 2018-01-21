pragma solidity ^0.4.18;

import "./TokenizedAsset.sol";

/**
  * A Contract to create and manage Sources for various agricultural/horticultural/forest produce
  * that are part of some arbitrary supply/value chain
**/
contract Sources is TokenizedAsset {

    struct Source {
      string name;
      string email;
      address outgoingAsset;
    }

    address[] sourceAddrs;

    mapping (address => Source) Sources;

    mapping (string => address) emailAccSource;

    /**
     * Method to create a Source with an associated admin.
     * Source also associated with a specific asset/token
     *
     * @param _name    The name of the source
     * @param _email    The email of the source's admin
     * @param _outgoingAsset    The address of the asset/token Contract address that the department can transfer out to a department in the value chain
     * @param _accAddr    The wallet address the source
     */
    function createSource(string _name, string _email, address _outgoingAsset, address _accAddr) {
        sourceAddrs.push(_accAddr);

        Source memory s = Source(_name, _email, _outgoingAsset);
        Sources[_accAddr] = s;
    }

    function getSource(address _accAddr) constant returns(string, string, address) {
        string name = Sources[_accAddr].name;
        string email = Sources[_accAddr].email;
        address outgoingAsset = Sources[_accAddr].outgoingAsset;
        return(name, email, outgoingAsset);
    }

    function getSourceAccAddr(uint8 index) constant returns (address) {
        return sourceAddrs[index];
    }

    function getSourcesSize() constant returns (uint) {
        return sourceAddrs.length;
    }

    function getAccWithEmail(string email) constant returns (address) {
        return emailAccSource[email];
    }

    function addAssetAmount(uint amount, address assetContractAddr) {
        TokenizedAsset asset = TokenizedAsset(assetContractAddr);
        asset.mint(msg.sender, amount);
    }

    /**
     * Method to enable transfer of a specific Asset/Token from source wallet to a department wallet
     *
     * @param from    The sender's wallet address
     * @param to    The receiver's wallet address
     * @param amount    The number of tokens to be transferred
     * @param assetContractAddr    The asset/token contract address
     */
    function transferAsset(address from, address to, uint amount, address assetContractAddr) {
        TokenizedAsset asset = TokenizedAsset(assetContractAddr);
        asset.transferFrom(from, to, amount);
    }
}
