pragma solidity ^0.4.18;

import './math/SafeMath.sol';

contract Departments {

    struct Department {
      string name;
      string email;
      address incomingAsset;
      address outgoingAsset;
    }

    address[] departmentAddrs;

    mapping (address => Department) Departments;

    mapping (string => address) emailAccDepartment;

    function createDepartment(string _name, string _email, address _incomingAsset, address _outgoingAsset, address _accAddr) {
        departmentAddrs.push(_accAddr);

        Department memory d = Department(_name, _email, _incomingAsset, _outgoingAsset);
        Departments[_accAddr] = d;
    }

    function getDepartment(address _accAddr) constant returns(string, string, address, address) {
        string name = Departments[_accAddr].name;
        string email = Departments[_accAddr].email;
        address incomingAsset = Departments[_accAddr].incomingAsset;
        address outgoingAsset = Departments[_accAddr].outgoingAsset;
        return(name, email, incomingAsset, outgoingAsset);
    }

    function getDepartmentAccAddr(uint8 index) constant returns (address) {
        return departmentAddrs[index];
    }

    function getDepartmentsSize() constant returns (uint8) {
        return departmentAddrs.length;
    }

    function getAccWithEmail(string email) constant returns (address) {
        return emailAccDepartment[email];
    }
}
