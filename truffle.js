//var HDWalletProvider = require("truffle-hdwallet-provider");
//var mnemonic = "oil minimum illness rescue tourist tree series gesture pave dose jump apology gas caution nature";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4000000
    }//,
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte")
    //   },
    //   network_id: 3,
    //   gas: 500000
    // }
  }
};
