$(function () {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  }
  else {
    // set the provider you want from Web3.providers
    //  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://35.154.203.141:8545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte"));
  }

  var tokenContract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "names",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contracts",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "getSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNameSize",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_assetAddr",
          "type": "address"
        }
      ],
      "name": "getContractSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "getAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "symbols",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "createAssetContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_assetAddr",
          "type": "address"
        }
      ],
      "name": "getContractName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ], "0x504a4aa06275c88d6bd535436b39fc327b178c97");



  $(".addAssetAmountBtn").click(function () {
    var assetName = $("#name").val();
    var assetSymbol = $("#symbol").val();
    var assetAmount = $("#amount").val();

    if (assetAmount == "") {
      assetAmount = 0;
    } else {
      assetAmount = parseInt(assetAmount);
    }

    tokenContract.methods.createAssetContract(assetName, assetSymbol).send({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas: 3000000 }).on("receipt", function (receipt) {
      var result = tokenContract.methods.createAssetContract(assetName, assetSymbol).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        console.log("addr", res);
      });
    })
      .on("error", console.log);
  })

  function getName(index) {
    return tokenContract.methods.getName(index).call();
  }
  function getSymbol(index) {
    return tokenContract.methods.getSymbol(index).call();
  }

  function getNameSize() {
    return tokenContract.methods.getNameSize().call();
  }

  async function setTableRows() {
    var assetTable = $("#assetTable tbody");
    let size = await getNameSize();

    for (var i = 0; i < size; i++) {

      let [name, symbol] = await Promise.all([getName(i), getSymbol(i)]);

      let newRow = `<tr><td>${name}</td><td>${symbol}</td></tr>`;

      assetTable.append(newRow);
    }
  }

  $(window).load(function () {
    setTableRows();
  });

});

