$(function(){
	if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
  } 
  else {
    // set the provider you want from Web3.providers
    //  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
     web3 = new Web3(new Web3.providers.HttpProvider("http://35.154.203.141:8545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte"));
  }

	var deptContract = new web3.eth.Contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_incomingAsset",
          "type": "address"
        },
        {
          "name": "_outgoingAsset",
          "type": "address"
        }
      ],
      "name": "createTempDepartment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDepartmentsSize",
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
      "inputs": [],
      "name": "getTempDepartmentsSize",
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "assetContractAddr",
          "type": "address"
        }
      ],
      "name": "transferAsset",
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
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTempDepartmentEmail",
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getDepartmentAccAddr",
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
          "name": "_email",
          "type": "string"
        }
      ],
      "name": "getTempDepartment",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "address"
        },
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
      "constant": false,
      "inputs": [
        {
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_accAddr",
          "type": "address"
        }
      ],
      "name": "createDepartment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "name": "getAccWithEmail",
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
          "name": "_accAddr",
          "type": "address"
        }
      ],
      "name": "getDepartment",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }], "0x879d212866730673d969d17332613f68e1dffc98");

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
    }], "0x504a4aa06275c88d6bd535436b39fc327b178c97");

	var currentAccount = localStorage.getItem('currentAccount');
  var incomingAssetName;
  var outgoingAssetName;
  var incomingAssetAddress;
  var outgoingAssetAddress;

	function getAssetName(assetAddr){
		return tokenContract.methods.getContractName(assetAddr).call();
	}
	function getAssetSymbol(assetAddr){
		return tokenContract.methods.getContractSymbol(assetAddr).call();
	}

  function getDepartmentsSize() {
    return deptContract.methods.getDepartmentsSize().call();
  }
  function getDepartmentAccAddr(index){
    return deptContract.methods.getDepartmentAccAddr(index).call();
  }
  function getDepartment(addr){
    return deptContract.methods.getDepartment(addr).call();
  }
  function assetTransfer(to, amount){
    var outgoingAssetAddr = web3.utils.toHex(outgoingAssetAddress);
    var from = web3.utils.toHex(currentAccount);
    var to = web3.utils.toHex(to);

    deptContract.methods.transferAsset(from, to, amount, outgoingAssetAddr).send().on("receipt", function (receipt) {
     var result = deptContract.methods.transferAsset(from, to, amount, outgoingAssetAddr).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        console.log("addr", res);
      });
    })
      .on("error", console.log);
  }

	async function getDepartmentDetails() {
		let department = await deptContract.methods.getDepartment(currentAccount).call();

		let [incomingAssetName, incomingAssetSymbol] = await Promise.all([getAssetName(department[2]), getAssetSymbol(department[2])]);
		let [outgoingAssetName, outgoingAssetSymbol] = await Promise.all([getAssetName(department[3]), getAssetSymbol(department[3])]);

		incomingAssetName = incomingAssetName;
    outgoingAssetName = outgoingAssetName;
    incomingAssetAddress = department[2];
    outgoingAssetAddress = department[3];

    $('.incomingAssetDiv').append('<span class="card-text">Name</span><span class="card-title" id="incomingAssetName">'+incomingAssetName+'</span><span class="card-text">Symbol</span><span class="card-title" id="incomingAssetSymbol">'+incomingAssetSymbol+'</span><span class="card-text">Balance</span><span class="card-title" id="incomingAssetAmount"></span>');
		$('.outgoingAssetDiv').append('<span class="card-text">Name</span><span class="card-title" id="incomingAssetName">'+outgoingAssetName+'</span><span class="card-text">Symbol</span><span class="card-title" id="incomingAssetSymbol">'+outgoingAssetSymbol+'</span><span class="card-text">Balance</span><span class="card-title" id="incomingAssetAmount"></span>')
	   
    $('.assetConvertDiv').append('<span class="card-text">Name</span><span class="card-title">'+incomingAssetName+'</span><span class="card-text">Balance</span><span class="card-title">500 '+incomingAssetSymbol+'</span>');
  }

  async function getDepartmentList(){
    let size = await getDepartmentsSize();

    for (var i = 0; i < size; i++) {
      let [departmentAddr] = await Promise.all([getDepartmentAccAddr(i)]);

      let [deptData] = await Promise.all([getDepartment(departmentAddr)]);

      let newRow = `<option value=${departmentAddr}>${deptData[0]}</option>`;

      $('.selectedDepartment').append(newRow);
    }
  }

  async function transferAsset(selectedDepartment, amount){
    let result = await assetTransfer(selectedDepartment, amount);
    console.log('result', result);
  }

	$(window).load(function(){
		getDepartmentDetails();
    getDepartmentList();

		$('.accountNumber')[0].innerHTML = currentAccount;

    //on convert asset
    $('.convertAssetBtn').click(function(){

    });

    //on transfer asset
    $('.transferBtn').click(function(){
      var selectedDepartment = web3.utils.toHex($('.selectedDepartment').find(":selected").val());
      var amount = $('#amount').val();
      transferAsset(selectedDepartment, amount);
    });

	});
});