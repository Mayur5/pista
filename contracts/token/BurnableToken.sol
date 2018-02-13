pragma solidity ^0.4.18;

import './BasicToken.sol';

/**
 * @title Burnable Token
 * @dev Token that can be irreversibly burned (destroyed).
 */
contract BurnableToken is BasicToken {

    event Burn(address indexed burner, uint256 value);

    /**
     * @dev Burns a specific amount of tokens.
     * @param _burner The account to be burned.
     * @param _value The amount of token to be burned.
     */
    function burn(address _burner, uint256 _value) public {
        //require(_value <= balances[_burner]);
        // no need to require value <= totalSupply, since that would imply the
        // sender's balance is greater than the totalSupply, which *should* be an assertion failure

        address burner = _burner;
        balances[burner] = balances[burner].sub(_value);
        //totalSupply = totalSupply.sub(_value);
        Burn(burner, _value);
    }
}
