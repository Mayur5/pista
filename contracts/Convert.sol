pragma solidity ^0.4.18;

contract Convert {
    mapping (address => mapping (address => uint8)) ConversionRate;

    function setConversionRate(address incomingAsset, address outgoingAsset, uint8 rate) {
        ConversionRate[incomingAsset][outgoingAsset] = rate;
    }

    function getConversionRate(address incomingAsset, address outgoingAsset) constant returns (uint8) {
        return ConversionRate[incomingAsset][outgoingAsset];
    }
}
