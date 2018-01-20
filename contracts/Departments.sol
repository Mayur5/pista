pragma solidity ^0.4.18;

contract Departments {

    struct Department {
      string name;
      string email;
    }

    mapping (address => Department) Departments;

    function createDepartment(string name, string email) {

    }

    function updateDepartmentWallet(address _walletAddr) {

    }

    function updateAssetSet() {

    }

    function getDepartmentByAddress(address _walletAddress) constant returns(string, string) {

    }
}
