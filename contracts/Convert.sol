pragma solidity ^0.4.18;

import './math/SafeMath.sol';
import "./TokenizedAsset.sol";

contract Convert is TokenizedAsset {
    mapping (address => mapping (address => uint)) ConversionRate;

    function setConversionRate(address incomingAsset, address outgoingAsset, uint rate) {
        ConversionRate[incomingAsset][outgoingAsset] = rate;
    }

    function getConversionRate(address incomingAsset, address outgoingAsset) constant returns (uint) {
        return ConversionRate[incomingAsset][outgoingAsset];
    }

    function convertAsset(uint expectedAmount, uint actualAmount, address originalAssetContractAddr, address convertedAssetContractAddr) {
        TokenizedAsset originalAsset = TokenizedAsset(originalAssetContractAddr);
        TokenizedAsset convertedAsset = TokenizedAsset(convertedAssetContractAddr);

        uint diffAmount = sub(expectedAmount, actualAmount);

        originalAsset.burn(diffAmount);
        convertedAsset.mint(msg.sender, actualAmount);
    }
}
