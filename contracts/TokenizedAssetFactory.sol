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

    // /**
    //  * Overrides the burn function
    //  *
    //  * @param _value    The amount of tokens to burn
    //  */
    // function burn(uint256 _value) public {
    //     super.burn(_value);
    //     Transfer(msg.sender, address(0x0), _value);
    // }

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

/**
  * An Asset(Token) Factory Contract to generate arbitrary assets/tokens
**/
contract TokenizedAssetFactory {
    string[] public names;
    string[] public symbols;
    address[] public contracts;

    mapping (address => string) AddressName;
    mapping (address => string) AddressSymbol;

    /**
     * Method to call the token constructor and save the name of the token and it's contract address
     *
     * @param name    The name of the token to be created
     * @param symbol    The symbol of the token to be created
     */
    function createAssetContract(string name, string symbol) public returns(TokenizedAsset) {
        TokenizedAsset ta = new TokenizedAsset(name, symbol);
        names.push(name);
        symbols.push(symbol);
        contracts.push(ta);

        AddressName[ta] = name;
        AddressSymbol[ta] = symbol;

        return ta;
    }

    /**
     * Method to fetch a specific asset's name
     *
     * @param i    Index to be fetched
     */
    function getName(uint i) public constant returns(string) {
        return names[i];
    }

    /**
     * Method to fetch a specific asset's symbol
     *
     * @param i    Index to be fetched
     */
    function getSymbol(uint i) public constant returns(string) {
        return symbols[i];
    }

    /**
     * Method to fetch a specific asset's contract address
     *
     * @param i    Index to be fetched
     */
    function getAddress(uint i) public constant returns(address) {
        return contracts[i];
    }

    /**
     * Method to fetch array size
     *
     */
    function getNameSize() public constant returns(uint) {
        return names.length;
    }

    /**
     * Method to fetch Contract Name using the Asset's Contract Address
     *
     * @param _assetAddr The Asset's Contract Address
     */
    function getContractName(address _assetAddr) public constant returns(string) {
        return AddressName[_assetAddr];
    }

    /**
     * Method to fetch Contract Symbol using the Asset's Contract Address
     *
     * @param _assetAddr The Asset's Contract Address
     */
    function getContractSymbol(address _assetAddr) public constant returns(string) {
        return AddressSymbol[_assetAddr];
    }
}
