pragma solidity ^0.4.18;

import './token/StandardToken.sol';
import './token/BurnableToken.sol';
import './ownership/Ownable.sol';
import './math/SafeMath.sol';

contract TokenizedAsset is StandardToken, BurnableToken, Ownable {

    string  public name;
    string  public symbol;
    uint8   public constant decimals = 18;

    function TokenizedAsset (string _name, string _symbol) {
        name = _name;
        symbol = _symbol;
    }
}
