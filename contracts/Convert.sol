pragma solidity ^0.4.18;

import './token/StandardToken.sol';
import './token/BurnableToken.sol';
import './token/MintableToken.sol';
import './math/SafeMath.sol';

/**
  * An ERC20 compliant token generator Contract with all the basic functionality of
  * Transfer, TransferFrom, GetBalance
  * Basic ERC20 functionality extended to included token burnability and token mintability
**/

contract TokenizedAsset is StandardToken, BurnableToken, MintableToken {

    string  public name;
    string  public symbol;
    uint8   public constant decimals = 18;

    /**
     * Asset/Token constructor
     *
     * @param _name    The name of the token to be created
     * @param _name    The symbol of the token to be created
     */
    function TokenizedAsset (string _name, string _symbol) payable {
        name = _name;
        symbol = _symbol;
    }

    /**
     * Overrides the burn function
     *
     * @param _value    The amount of tokens to burn in mini-RBC
     */
    function burn(uint256 _value) public {
        super.burn(_value);
        Transfer(msg.sender, address(0x0), _value);
    }

    /**
     * Overrides the mint function
     *
     * @param _to       The beneficiary of the mint
     * @param _value    The amount to be minted
     */
    function mint(address _to, uint256 _value) public returns (bool) {
        return super.mint(_to, _value);
    }

    /**
     * Overrides the transferFrom function
     *
     * @param _from    The amount of tokens to burn in mini-RBC
     * @param _to    The amount of tokens to burn in mini-RBC
     * @param _amount    The amount of tokens to burn in mini-RBC
     */
    function transferFrom(address _from, address _to, uint _amount) public returns (bool) {
        return super.transferFrom(_from, _to, _amount);
    }
}

/**
  * A Contract to convert one asset/token to another
  * by burning a specific amount of the original asset/token
  * and minting a rate calculated amount of the converted asset/tokens
  * Contract also affords for any loss/wastage
**/
contract Convert {
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

        uint diffAmount = expectedAmount.sub(actualAmount);

        originalAsset.burn(diffAmount);
        bool result = convertedAsset.mint(msg.sender, actualAmount);
    }
}
