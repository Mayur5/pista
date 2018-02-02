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

    var sourceContract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [],
      "name": "getTempSourcesSize",
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
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_accAddr",
          "type": "address"
        }
      ],
      "name": "createSource",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "name": "getSource",
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
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_outgoingAsset",
          "type": "address"
        }
      ],
      "name": "createTempSource",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "assetContractAddr",
          "type": "address"
        }
      ],
      "name": "addAssetAmount",
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
      "name": "getSourceAccAddr",
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
      "name": "getTempSource",
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
      "inputs": [],
      "name": "getSourcesSize",
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTempSourceEmail",
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
  ], "0x3082127c61974365f9c99054830a2572c477f6c7");

  $('.createSourceBtn').click(function(){
  	var name = $('#sourceName').val();
  	var email = $('#sourceEmail').val();
  	var outgoingAsset = web3.utils.toHex($('.outgoingAsset').find(":selected").val());

  	sourceContract.methods.createTempSource(name, email, outgoingAsset).send({from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c", gas: 3000000 }).on("receipt", function (receipt) {
    	var result = sourceContract.methods.createTempSource(name, email, outgoingAsset).call({ from: "0xceaa0bec4bfd4da238d10e7e74631e68fa39b53c" }, function (error, res) {
        	console.log("addr", res);
     	});	
    })
    .on("error", console.log);
    		
	});

  //get temporary source list
  function getTempSourcesSize() {
    return sourceContract.methods.getTempSourcesSize().call();
  }
	function getTempSourceEmail(index){
		return sourceContract.methods.getTempSourceEmail(index).call();
	}
  function getTempSource(email){
    return sourceContract.methods.getTempSource(email).call();
  }

  //get sources list
  function getSourcesSize() {
    return sourceContract.methods.getSourcesSize().call();
  }
  function getSourceEmail(index){
    return sourceContract.methods.getSourceAccAddr(index).call();
  }
  function getSource(addr){
    return sourceContract.methods.getSource(addr).call();
  }

  //get assets data
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
	    var sourceTable = $("#sourcesTable tbody");
	    let tempSize = await getTempSourcesSize();
      let size = await getSourcesSize();

      //get temp sources
	    for (var i = 0; i < tempSize; i++) {
	    	let [sourceEmail] = await Promise.all([getTempSourceEmail(i)]);
        let [source] = await Promise.all([getTempSource(sourceEmail)]);

	    	let newRow = `<tr><td>${source[0]}</td><td>${source[1]}</td><td>${source[2]}</td><td>Pending</td></tr>`;

      	sourceTable.append(newRow);
	    }

      //get sources
      for (var i = 0; i < size; i++) {
        let [sourceAddr] = await Promise.all([getSourceEmail(i)]);
        let [source] = await Promise.all([getSource(sourceAddr)]);

        let newRow = `<tr><td>${source[0]}</td><td>${source[1]}</td><td>${source[2]}</td><td>Completed</td></tr>`;

        sourceTable.append(newRow);
      }
	}

	async function getAssetList() {
		let size = await getNameSize();
        for (var i = 0; i < size; i++) {

	      let [name, symbol, address] = await Promise.all([getName(i), getSymbol(i), getAddress(i)]);

	      let newRow = `<option value=${address}>${name} - ${symbol}</option>`;

	      $('.outgoingAsset').append(newRow);
	    }
	}

  $(window).load(function() {

  	setTableRows();
  	getAssetList();

  });


});