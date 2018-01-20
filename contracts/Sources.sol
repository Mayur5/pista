pragma solidity ^0.4.18;

contract Sources {

    struct Source {
      string name;
      string email;
    }

    mapping (address => Source) Sources;

    function createSource(string name, string email) {

    }

    function updateSourceWallet(address _walletAddr) {

    }

    function updateAssetSet() {

    }

    function updateParamSet() {

    }

    function getSourceByAddress(address _sourceWallet) constant returns(string, string) {

    }
}
