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
  ], "0x4a92a44cc57035509ab5d86f0f28cd38af75c090");

  var convertContract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "incomingAsset",
          "type": "address"
        },
        {
          "name": "outgoingAsset",
          "type": "address"
        }
      ],
      "name": "getConversionRate",
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
      "constant": false,
      "inputs": [
        {
          "name": "originalAssetAmount",
          "type": "uint256"
        },
        {
          "name": "actualAmount",
          "type": "uint256"
        },
        {
          "name": "originalAssetContractAddr",
          "type": "address"
        },
        {
          "name": "convertedAssetContractAddr",
          "type": "address"
        }
      ],
      "name": "convertAsset",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRatesLength",
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
      "constant": false,
      "inputs": [
        {
          "name": "incomingAsset",
          "type": "address"
        },
        {
          "name": "outgoingAsset",
          "type": "address"
        },
        {
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "setConversionRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ], "0x91c2a6fd8ffe83ff04bdce57ead9e80b9652cdbf");


  $(".addAssetAmountBtn").click(function () {
    var assetName = $("#name").val();
    var assetSymbol = $("#symbol").val();
    var assetAmount = $("#amount").val();

    if (assetAmount == "") {
      assetAmount = 0;
    } else {
      assetAmount = parseInt(assetAmount);
    }
    Materialize.toast('The transaction is getting mined. You will be redirected when mining has completed.<span class="closeBtn"><i class="fas fa-times"></i></span>');

    tokenContract.methods.createAssetContract(assetName, assetSymbol).send({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas: 3000000 }).on("receipt", function (receipt) {
      var result = tokenContract.methods.createAssetContract(assetName, assetSymbol).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        Materialize.Toast.removeAll();
        location.href = './assets.html';
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
  function getAddress(index){
    return tokenContract.methods.getAddress(index).call();
  }

  function getRate(incoming, outgoing){
    return convertContract.methods.getConversionRate(incoming, outgoing).call();
  }

  function getLength(){
    return convertContract.methods.getRatesLength().call();
  }

  async function setTableRows() {
    var assetTable = $("#assetTable tbody");
    let size = await getNameSize();

    for (var i = 0; i < size; i++) {

      let [name, symbol, address] = await Promise.all([getName(i), getSymbol(i), getAddress(i)]);

      let newRow = `<tr><td>${name}</td><td>${symbol}</td></tr>`;
      let newOption = `<option value=${address}>${name} - ${symbol}</option>`;

      $('.incomingAsset').append(newOption);
      $('.outgoingAsset').append(newOption);
      assetTable.append(newRow);
    }
  }

  async function convertAsset(rate, incomingAssetAddr, outgoingAssetAddr){
    Materialize.toast('The transaction is getting mined. You will be redirected when mining has completed.<span class="closeBtn"><i class="fas fa-times"></i></span>');

    let convertRes = await convertContract.methods.setConversionRate(incomingAssetAddr, outgoingAssetAddr, rate).send({from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas:300000}).on("receipt", function (receipt) {
      var result = convertContract.methods.setConversionRate(incomingAssetAddr, outgoingAssetAddr, rate).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        
        Materialize.Toast.removeAll();
        location.href = './assets.html';
      });
      
    })
      .on("error", console.log);

    let convertRate = await getRate(incomingAssetAddr, outgoingAssetAddr);
    let length = await getLength();
  }

  $(window).load(function () {
    setTableRows();

    //set conversion rate
    $('.conversionRateBtn').click(function(){
      var incomingAssetAddr = web3.utils.toHex($('.incomingAsset').find(":selected").val());
      var outgoingAssetAddr = web3.utils.toHex($('.outgoingAsset').find(":selected").val());
      var conversionRate = $('#outgoingAmount').val();

      convertAsset(conversionRate, incomingAssetAddr, outgoingAssetAddr);

    });

  });

  $(document).on('click', '#toast-container .toast', function() {
    $(this).fadeOut(function(){
      $(this).remove();
    });
  });

});

