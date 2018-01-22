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

    mapping (string => Source) TempSources;
    mapping (address => Source) Sources;

    mapping (string => address) emailAccSource;

    /**
     * Method to create a Temp Source till an Admin consolidates it with a wallet address.
     * Source also associated with an outgoing asset/token
     *
     * @param _name    The name of the Source
     * @param _email    The email of the Source's admin
     * @param _outgoingAsset    The address of the asset/token Contract address that the Source can transfer out to another Source in the value chain
     */
    function createTempSource(string _name, string _email, address _outgoingAsset) {
        Source memory d = Source(_name, _email, _incomingAsset, _outgoingAsset);
        TempSources[_email] = d;
    }

    /**
     * Method to consolidate a Source with an associated admin's wallet address.
     * Source also associated with an outgoing asset/token
     *
     * @param _email    The email of the Source's admin
     * @param _accAddr    The wallet address the Source
     */
    function createSource(string _email, address _accAddr) {
        sourceAddrs.push(_accAddr);
        Source memory d = TempSources[_email];
        Sources[_accAddr] = d;

        delete TempSources[_email];
        emailAccSource[_email] = _accAddr;
    }

    /**
     * Method to get a Source using it's wallet address
     *
     * @param _accAddr    The wallet address the source
     */
    function getSource(address _accAddr) constant returns(string, string, address) {
        string name = Sources[_accAddr].name;
        string email = Sources[_accAddr].email;
        address outgoingAsset = Sources[_accAddr].outgoingAsset;
        return(name, email, outgoingAsset);
    }

    /**
     * Method to get a Source's Wallet address from an arbitrary array
     *
     * @param _index    The index to be fetched
     */
    function getSourceAccAddr(uint8 index) constant returns (address) {
        return sourceAddrs[index];
    }

    /**
     * Method to get the size of the arbitrary source address array
     *
     */
    function getSourcesSize() constant returns (uint) {
        return sourceAddrs.length;
    }

    /**
     * Method to get a Source's address using the admin email
     *
     * @param email    The email of the admin of a specific source
     */
    function getAccWithEmail(string email) constant returns (address) {
        return emailAccSource[email];
    }

    /**
     * Method to create(mint) a specific asset/token
     *
     * @param amount    The number of tokens to be minted
     * @param assetContractAddr    The asset/token contract address
     */
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
