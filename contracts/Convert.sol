pragma solidity ^0.4.18;

import './math/SafeMath.sol';
import "./TokenizedAsset.sol";

/**
  * A Contract to convert one asset/token to another
  * by burning a specific amount of the original asset/token
  * and minting a rate calculated amount of the converted asset/tokens
  * Contract also affords for any loss/wastage
**/
contract Convert is TokenizedAsset {
    mapping (address => mapping (address => uint)) ConversionRate;

    /**
     * Method to set an arbitrary conversion rate between a pair of asset/token
     *
     * @param incomingAsset The original asset/token contract address
     * @param incomingAsset The converted asset/token contract address
     * @param rate The conversion rate
     */
    function setConversionRate(address incomingAsset, address outgoingAsset, uint rate) {
        ConversionRate[incomingAsset][outgoingAsset] = rate;
    }

    /**
     * Method to get the conversion rate between a pair of asset/token
     *
     * @param incomingAsset The original asset/token contract address
     * @param incomingAsset The converted asset/token contract address
     */
    function getConversionRate(address incomingAsset, address outgoingAsset) constant returns (uint) {
        return ConversionRate[incomingAsset][outgoingAsset];
    }

    /**
     * Method to perform the conversion by burning original asset/token standard
     * minting converted asset/token
     *
     * @param expectedAmount The converted amount expected as per rate
     * @param actualAmount The actual amount owing to wastage
     * @param originalAssetContractAddr The original asset/token contract address
     * @param convertedAssetContractAddr The converted asset/token contract address
     */
    function convertAsset(uint expectedAmount, uint actualAmount, address originalAssetContractAddr, address convertedAssetContractAddr) {
        TokenizedAsset originalAsset = TokenizedAsset(originalAssetContractAddr);
        TokenizedAsset convertedAsset = TokenizedAsset(convertedAssetContractAddr);

        uint diffAmount = sub(expectedAmount, actualAmount);

        originalAsset.burn(diffAmount);
        convertedAsset.mint(msg.sender, actualAmount);
    }
}
