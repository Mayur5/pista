pragma solidity ^0.4.18;

import './token/StandardToken.sol';
import './token/MintableToken.sol';
import './math/SafeMath.sol';

/**
  * An ERC20 compliant token generator Contract with all the basic functionality of
  * Transfer, TransferFrom, GetBalance
  * Basic ERC20 functionality extended to included token burnability and token mintability
**/

contract TokenizedAsset is StandardToken, MintableToken {

    string  public name;
    string  public symbol;
    uint8   public constant DECIMALS = 18;

    /**
     * Asset/Token constructor
     *
     * @param _name    The name of the token to be created
     * @param _name    The symbol of the token to be created
     */
    function TokenizedAsset (string _name, string _symbol) public payable {
        name = _name;
        symbol = _symbol;
    }

    /**
     * Overrides the burn function
     *
     * @param burner    The account from which to burn
     * @param _value    The amount of tokens to burn
     */
    function burn(address burner, uint256 _value) public {
        balances[burner] = balances[burner].sub(_value);
    }

    // /**
    //  * Overrides the mint function
    //  *
    //  * @param _to       The beneficiary of the mint
    //  * @param _value    The amount to be minted
    //  */
    // function mint(address _to, uint256 _value) public returns (bool) {
    //     return super.mint(_to, _value);
    // }

    // /**
    //  * Overrides the transferFrom function
    //  *
    //  * @param _from    The account to transfer from
    //  * @param _to    The account to transfer to
    //  * @param _amount    The amount to transfer
    //  */
    // function transferFrom(address _from, address _to, uint _amount) public returns (bool) {
    //     return super.transferFrom(_from, _to, _amount);
    // }
}