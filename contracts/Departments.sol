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
  * A Contract to create and manage Govt. Departments that are part of some arbitrary supply/value chain
**/
contract Departments {

    struct Department {
      string name;
      string email;
      address incomingAsset;
      address outgoingAsset;
    }

    address[] departmentAddrs;
    string[] tempDepartmentEmails;

    mapping (string => Department) TempDepartments;
    mapping (address => Department) Departments;

    mapping (string => address) emailAccDepartment;

    /**
     * Method to create a Temp Department till an Admin consolidates it with a wallet address.
     * Department also associated with an incoming asset/token and an outgoing asset/token which can be the same asset/token
     *
     * @param _name    The name of the department
     * @param _email    The email of the department's admin
     * @param _incomingAsset    The address of the asset/token Contract address that the department can receive from a source/department in the value chain
     * @param _outgoingAsset    The address of the asset/token Contract address that the department can transfer out to another department in the value chain
     */
    function createTempDepartment(string _name, string _email, address _incomingAsset, address _outgoingAsset) public {
        tempDepartmentEmails.push(_email);
        Department memory d = Department(_name, _email, _incomingAsset, _outgoingAsset);
        TempDepartments[_email] = d;
    }

    /**
     * Method to consolidate a Department with an associated admin's wallet address.
     * Department also associated with an incoming asset/token and an outgoing asset/token which can be the same asset/token
     *
     * @param _email    The email of the department's admin
     * @param _accAddr    The wallet address the department
     */
    function createDepartment(string _email, address _accAddr) public {
        departmentAddrs.push(_accAddr);
        Department memory d = TempDepartments[_email];
        Departments[_accAddr] = d;

        delete TempDepartments[_email];
        emailAccDepartment[_email] = _accAddr;
    }

    /**
     * Method to get a Temp Department using it's email
     *
     * @param _email    The email the department
     */
    function getTempDepartment(string _email) public constant returns(string, string, address, address) {
        string name = TempDepartments[_email].name;
        string email = TempDepartments[_email].email;
        address incomingAsset = TempDepartments[_email].incomingAsset;
        address outgoingAsset = TempDepartments[_email].outgoingAsset;
        return(name, email, incomingAsset, outgoingAsset);
    }

    /**
     * Method to get a Department using it's wallet address
     *
     * @param _accAddr    The wallet address the department
     */
    function getDepartment(address _accAddr) public constant returns(string, string, address, address) {
        string name = Departments[_accAddr].name;
        string email = Departments[_accAddr].email;
        address incomingAsset = Departments[_accAddr].incomingAsset;
        address outgoingAsset = Departments[_accAddr].outgoingAsset;
        return(name, email, incomingAsset, outgoingAsset);
    }

    /**
     * Method to get a Temp Department's Email from an arbitrary array
     *
     * @param index    The index to be fetched
     */
    function getTempDepartmentEmail(uint index) public constant returns (string) {
        return tempDepartmentEmails[index];
    }

    /**
     * Method to get a Department's Wallet address from an arbitrary array
     *
     * @param index    The index to be fetched
     */
    function getDepartmentAccAddr(uint index) public constant returns (address) {
        return departmentAddrs[index];
    }

    /**
     * Method to get the size of the arbitrary temp department address array
     *
     */
    function getTempDepartmentsSize() public constant returns (uint) {
        return tempDepartmentEmails.length;
    }

    /**
     * Method to get the size of the arbitrary department address array
     *
     */
    function getDepartmentsSize() public constant returns (uint) {
        return departmentAddrs.length;
    }

    /**
     * Method to get a Department's address using the admin email
     *
     * @param email    The email of the admin of a specific department
     */
    function getAccWithEmail(string email) public constant returns (address) {
        return emailAccDepartment[email];
    }

    /**
     * Method to enable transfer of Asset from one source/department wallet to another department wallet
     *
     * @param from    The sender's wallet address
     * @param to    The receiver's wallet address
     * @param amount    The number of tokens to be transferred
     * @param assetContractAddr    The asset/token contract address
     */
    function transferAsset(address from, address to, uint amount, address assetContractAddr) public returns (bool) {
        TokenizedAsset asset = TokenizedAsset(assetContractAddr);
        return asset.transferFrom(from, to, amount);
    }
}
