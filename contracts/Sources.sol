pragma solidity ^0.4.18;

import "./TokenizedAsset.sol";

contract Sources is TokenizedAsset {

    struct Source {
      string name;
      string email;
      address outgoingAsset;
    }

    address[] sourceAddrs;

    mapping (address => Source) Sources;

    mapping (string => address) emailAccSource;

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
}
