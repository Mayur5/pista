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
        }
      ], "0xf38abf53d19bebf224064c23dfe0cd503e8d2a5d");

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
  ], "0xab0f91358130bbf37772edda1637ee3a6a4a8e0f");

    $('.createDeptBtn').click(function(){
    	var name = $('#deptName').val();
    	var email = $('#deptEmail').val();
    	var incomingAsset = web3.utils.toHex($('.incomingAsset').find(":selected").val());
    	var outgoingAsset = web3.utils.toHex($('.outgoingAsset').find(":selected").val());

    	console.log('incomingAsset', $('.incomingAsset').find(":selected").val());

    	deptContract.methods.createTempDepartment(name, email, incomingAsset, outgoingAsset).send({from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas: 3000000 }).on("receipt", function (receipt) {
	    	var result = deptContract.methods.createTempDepartment(name, email, incomingAsset, outgoingAsset).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
	        	console.log("addr", res);
	     	});	
	    })
	    .on("error", console.log);
    		
	});

	function getDepartment(index){
		return deptContract.methods.getDepartment(index).call();
	}
  function getTempDepartment(index){
    return deptContract.methods.getTempDepartmentEmail(index).call();
  }

	function getDepartmentsSize() {
	    return deptContract.methods.getDepartmentsSize().call();
  }
  
  function getTempDepartmentsSize() {
      return deptContract.methods.getTempDepartmentsSize().call();
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

	function getNameSize() {
		return tokenContract.methods.getNameSize().call();
	}

	async function setTableRows() {
	    var deptTable = $("#departmentTable tbody");
	    let size = await getDepartmentsSize();

      console.log('size', size);
      
      let tempSize = await getTempDepartmentsSize();

	    console.log('temp size', tempSize);

      for (var i = 0; i < tempSize; i++) {
        let [tempDeptEmail] = await Promise.all([getTempDepartment(i)]);
        console.log('tempDeptEmail', tempDeptEmail);

        //let newRow = `<tr><td>${name}</td><td>${symbol}</td></tr>`;
        //deptTable.append(newRow);
      }

	    for (var i = 0; i < size; i++) {
	    	let [department] = await Promise.all([getDepartment(i)]);

	    	console.log('department', department);

	    	let newRow = `<tr><td>${name}</td><td>${symbol}</td></tr>`;

      		deptTable.append(newRow);
	    }
	}

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