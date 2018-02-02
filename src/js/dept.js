$(function() {
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
  ], "0x879d212866730673d969d17332613f68e1dffc98");

  //on create department button click
  $('.createDeptBtn').click(function(){
  	var name = $('#deptName').val();
  	var email = $('#deptEmail').val();
  	var incomingAsset = web3.utils.toHex($('.incomingAsset').find(":selected").val());
  	var outgoingAsset = web3.utils.toHex($('.outgoingAsset').find(":selected").val());

  	deptContract.methods.createTempDepartment(name, email, incomingAsset, outgoingAsset).send({from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas: 3000000 }).on("receipt", function (receipt) {
    	var result = deptContract.methods.createTempDepartment(name, email, incomingAsset, outgoingAsset).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        	console.log("addr", res);
     	});	
    })
    .on("error", console.log);		
	});

  //functions to get department list
  function getDepartmentsSize() {
    return deptContract.methods.getDepartmentsSize().call();
  }
	function getDepartmentAccAddr(index){
		return deptContract.methods.getDepartmentAccAddr(index).call();
	}
  function getDepartment(addr){
    return deptContract.methods.getDepartment(addr).call();
  }

  //functions to get temp department lisr
  function getTempDepartmentsSize() {
    return deptContract.methods.getTempDepartmentsSize().call();
  }
  function getTempDepartmentEmail(index){
    return deptContract.methods.getTempDepartmentEmail(index).call();
  }
  function getTempDepartment(email){
    return deptContract.methods.getTempDepartment(email).call();
  }

  //get asset name from address
  function getAssetName(assetAddr){
    return tokenContract.methods.getContractName(assetAddr).call();
  }

  //functions to get asset data
  function getNameSize() {
    return tokenContract.methods.getNameSize().call();
  }
	function getName(index) {
    return tokenContract.methods.getName(index).call();
	}
	function getSymbol(index) {
		return tokenContract.methods.getSymbol(index).call();
	}
	function getAddress(index){
		return tokenContract.methods.getAddress(index).call();
	}

  //function to display department data
	async function setTableRows() {
    var deptTable = $("#departmentTable tbody");
    let size = await getDepartmentsSize();
    
    let tempSize = await getTempDepartmentsSize();

    for (var i = 0; i < tempSize; i++) {
      let [tempDeptEmail] = await Promise.all([getTempDepartmentEmail(i)]);

      let [tempDept] = await Promise.all([getTempDepartment(tempDeptEmail)]);

      let [incomingAssetName, outgoingAssetName] = await Promise.all([getAssetName(tempDept[2]), getAssetName(tempDept[3])]);

      let newRow = `<tr><td>${tempDept[0]}</td><td>${tempDept[1]}</td><td>${incomingAssetName}</td><td>${outgoingAssetName}</td><td>Pending</td></tr>`;
      deptTable.append(newRow);
    }

    for (var i = 0; i < size; i++) {
    	let [departmentAddr] = await Promise.all([getDepartmentAccAddr(i)]);

      let [deptData] = await Promise.all([getDepartment(departmentAddr)]);

      let [incomingAssetName, outgoingAssetName] = await Promise.all([getAssetName(tempDept[2]), getAssetName(tempDept[3])]);

    	let newRow = `<tr><td>${deptData[0]}</td><td>${deptData[1]}</td><td>${incomingAssetName}</td><td>${outgoingAssetName}</td><td>Completed</td></tr>`;

    	deptTable.append(newRow);
    }
	}

  //function to display asset list
	async function getAssetList() {
		let size = await getNameSize();
        for (var i = 0; i < size; i++) {

	      let [name, symbol, address] = await Promise.all([getName(i), getSymbol(i), getAddress(i)]);

	      let newRow = `<option value=${address}>${name} - ${symbol}</option>`;

	      $('.incomingAsset').append(newRow);
	      $('.outgoingAsset').append(newRow);
	    }
	}

  $(window).load(function() {
  	setTableRows();
  	getAssetList();
  });

});