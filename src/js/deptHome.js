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
    }
  ], "0xada27bdc5b4657a66186008abe6676934add81f0");

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
  ], "0x261e020a1c38d95dbe34afd20fb1166766f52189");

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
          "name": "expectedAmount",
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
  ], "0xc7984bf2675d287af1140c2416a060371559bd14");

  var tokenAssetAddr;

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

  function getBalance(){
    return tokenAssetContract.methods.balanceOf(currentAccount).call();
  }

  function getRate(incoming, outgoing){
    return convertContract.methods.getConversionRate(incoming, outgoing).call();
  }

	async function getDepartmentDetails() {
		let department = await deptContract.methods.getDepartment(currentAccount).call();
    var tokenAssetAddr = department[2];
    let incomingAssetAddr = department[2];
    let outgoingAssetAddr = department[3];

    tokenAssetContract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "name": "totalSupply",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
      "name": "DECIMALS",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
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
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
      "name": "owner",
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
      "inputs": [],
      "name": "symbol",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "burner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ], tokenAssetAddr);

		let [incomingAssetName, incomingAssetSymbol] = await Promise.all([getAssetName(department[2]), getAssetSymbol(department[2])]);
		let [outgoingAssetName, outgoingAssetSymbol] = await Promise.all([getAssetName(department[3]), getAssetSymbol(department[3])]);
    let [rate] = await getRate(web3.utils.toHex(department[2]), web3.utils.toHex(department[3]));
    let balance = await getBalance();

    console.log('rate', rate);
		
    incomingAssetName = incomingAssetName;
    outgoingAssetName = outgoingAssetName;
    incomingAssetAddress = department[2];
    outgoingAssetAddress = department[3];

    $('.incomingAssetDiv').append('<span class="card-text">Name</span><span class="card-title" id="incomingAssetName">'+incomingAssetName+'</span><span class="card-text">Symbol</span><span class="card-title" id="incomingAssetSymbol">'+incomingAssetSymbol+'</span><span class="card-text">Balance</span><span class="card-title" id="incomingAssetAmount">'+balance+'</span>');
		$('.outgoingAssetDiv').append('<span class="card-text">Name</span><span class="card-title" id="incomingAssetName">'+outgoingAssetName+'</span><span class="card-text">Symbol</span><span class="card-title" id="incomingAssetSymbol">'+outgoingAssetSymbol+'</span><span class="card-text">Balance</span><span class="card-title" id="incomingAssetAmount">'+balance+'</span>')
	   
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

  async function transferAsset(department, amount){
    tokenAssetContract.methods.transfer(department, amount).send({from: currentAccount, gas:300000}).on("receipt", function (receipt) {

      var result = tokenAssetContract.methods.transfer(department, amount).call({ from: currentAccount }, function (error, res) {
        if(res){
          location.href = 'home.html';
        }
      });
    })
      .on("error two", console.log);
  }

  /*async function getConversionRate(){
    let result = await 
  }*/

  async function convertAsset(){
    /*tokenAssetContract.methods.transfer(department, amount).send({from: currentAccount, gas:300000}).on("receipt", function (receipt) {

      var result = tokenAssetContract.methods.transfer(department, amount).call({ from: currentAccount }, function (error, res) {
        if(res){
          location.href = 'home.html';
        }
      });
    })
      .on("error two", console.log);*/
  }

	$(window).load(function(){
		getDepartmentDetails();
    getDepartmentList();

		$('.accountNumber')[0].innerHTML = currentAccount;

    //on convert asset
    $('.convertAssetBtn').click(function(){
      
      convertAsset();
    });

    //on transfer asset
    $('.transferBtn').click(function(){
      var selectedDepartment = web3.utils.toHex($('.selectedDepartment').find(":selected").val());
      var amount = $('#amount').val();
      transferAsset(selectedDepartment, amount);
    });

	});
});