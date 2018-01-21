pragma solidity ^0.4.18;

import './math/SafeMath.sol';
import "./TokenizedAsset.sol";

/**
  * A Contract to create and manage Govt. Departments that are part of some arbitrary supply/value chain
**/
contract Departments is TokenizedAsset {

    struct Department {
      string name;
      string email;
      address incomingAsset;
      address outgoingAsset;
    }

    address[] departmentAddrs;

    mapping (address => Department) Departments;

    mapping (string => address) emailAccDepartment;

    /**
     * Method to create a Department with an associated admin.
     * Department also associated with an incoming asset/token and an outgoing asset/token which can be the same asset/token
     *
     * @param _name    The name of the department
     * @param _email    The email of the department's admin
     * @param _incomingAsset    The address of the asset/token Contract address that the department can receive from a source/department in the value chain
     * @param _outgoingAsset    The address of the asset/token Contract address that the department can transfer out to another department in the value chain
     * @param _accAddr    The wallet address the department
     */
    function createDepartment(string _name, string _email, address _incomingAsset, address _outgoingAsset, address _accAddr) {
        departmentAddrs.push(_accAddr);

        Department memory d = Department(_name, _email, _incomingAsset, _outgoingAsset);
        Departments[_accAddr] = d;
    }

    /**
     * Method to get a Department using it's wallet address
     *
     * @param _accAddr    The wallet address the department
     */
    function getDepartment(address _accAddr) constant returns(string, string, address, address) {
        string name = Departments[_accAddr].name;
        string email = Departments[_accAddr].email;
        address incomingAsset = Departments[_accAddr].incomingAsset;
        address outgoingAsset = Departments[_accAddr].outgoingAsset;
        return(name, email, incomingAsset, outgoingAsset);
    }

    /**
     * Method to get a Department's Wallet address from an arbitrary array
     *
     * @param _index    The index to be fetched
     */
    function getDepartmentAccAddr(uint index) constant returns (address) {
        return departmentAddrs[index];
    }

    /**
     * Method to get the size of the arbitrary department address array
     *
     */
    function getDepartmentsSize() constant returns (uint) {
        return departmentAddrs.length;
    }

    /**
     * Method to get a Department's address using the admin email
     *
     * @param email    The email of the admin of a specific department
     */
    function getAccWithEmail(string email) constant returns (address) {
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
    function transferAsset(address from, address to, uint amount, address assetContractAddr) {
        TokenizedAsset asset = TokenizedAsset(assetContractAddr);
        asset.transferFrom(from, to, amount);
    }
}
