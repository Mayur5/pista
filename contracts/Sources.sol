pragma solidity ^0.4.18;

contract Sources {

    struct Source {
      string name;
      string email;
      address outgoingAsset;
    }

    address[] sourceAddrs;

    mapping (address => Source) Sources;

    function createSource(string _name, string _email, address _outgoingAsset, address _accAddr) {
        sourceAddrs.push(_accAddr);

        Source memory s = Source(_name, _email, _outgoingAsset);
        Sources[_accAddr] = s;
    }

    function getSource(address _accAddr) constant returns(string, string, address) {
        string name = Departments[_accAddr].name;
        string email = Departments[_accAddr].email;
        address outgoingAsset = Departments[_accAddr].outgoingAsset;
        return(name, email, outgoingAsset);
    }

    function getSourceAccAddr(uint8 index) constant returns (address) {
        return sourceAddrs[index];
    }
}
