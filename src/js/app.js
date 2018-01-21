$(function() {
  var accountCreated;

  var abi = web3.eth.contract([
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
      "inputs": [
        {
          "name": "index",
          "type": "uint8"
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
  ]);

  var contract = abi.at("0x2949c974dec09777dd16c7291e119d119d324bc4");

  async function createAccount() {
    let response = await web3.eth.accounts.create(web3.utils.randomHex(32));

    return response;
  }

  async function createDepartment(deptName, deptEmail, incomingAsset, outgoingAsset, deptAddress){
    let response = await contract.createDepartment(deptName, deptEmail, incomingAsset, outgoingAsset, deptAddress);

    return response;
  }

  async function createSource(sourceName, sourceEmail, outgoingAsset, sourceAddress){
    let response = await contract.createSource(deptName, deptEmail, outgoingAsset, sourceAddress);

    return response;
  }

  async function createWallet(account){
    let response = await web3.eth.accounts.wallet.add(account);

    return response;
  }

  async function getContractAddress(assetName){
    let response = await contract.getAssetContractAddress(assetName);

    return response;
  }

  async function addAmount(address) {
    let response = await contract.addAssetAmount(address);

    return response;
  }

  async function convertAsset(expectedAmount, actualAmount, originalAssetAddr, convertedAssetAddr){
    let response = await contract.convertAsset(expectedAmount, actualAmount, originalAssetAddr, convertedAssetAddr);

    return response;
  }

  async function transferAsset(deptFrom, deptTo, amount, outgoingAssetAddr){
    let response = await contract.transferAsset(deptFrom, deptTo, amount, outgoingAssetAddr);

    return response;
  }

  $(window).load(function() {
    $('select').material_select();

    $('.signUpBtn').click(function(){
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte"));
      }

      var email = $('#email').val();
      contract.getAccWithEmail(email, function(error, result){
        var account = result.address;

        createWallet(account).then((result) => {
          accountCreated = result;
          $('.accountNumber')[0].innerHTML = result.address;
          $('.publicKey')[0].innerHTML = result.address;

          $('.userDiv').show();
          $('.signUpForm').hide();

        });
      });

      //check if metamask exists
      $('.check').click(function(){
        if (typeof web3 !== 'undefined') {
          // Use Mist/MetaMask's provider
          window.web3 = new Web3(web3.currentProvider);
          $.confirm({
            title: 'MetaMask detected!',
            content: 'Please ensure you are on the test network.',
            useBootstrap: false,
            type: 'green',
            buttons: {
              continue: {
                text: 'Click here to continue',
                action: function(){
                  location.href = 'assets.html';
                }
              }
            }
          });
        } 
        else {
          $.confirm({
            title: 'No web3? You should consider trying MetaMask!',
            content: '',
            useBootstrap: false,
            type: 'red',
            buttons: {
              continue: {
                text: '',
                btnClass: 'downloadBtn',
                action: function(){
                  window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en");
                }
              }
            }
          });
        }
      });
    });

    //continue to department home page
    $('.continue').click(function(){
      location.href = './home.html';
    });

    //continue to source home page
    $('.continueSourceBtn').click(function(){
      location.href = './sourceHome.html';
    });
  });

  //download private key
  $('.download').click(function(){
    var privateKey = accountCreated.privateKey;

    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([privateKey], {type: 'text'}));
    a.download = 'privateKey.txt';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
  });

  //function to create department
  $('.createDeptBtn').click(function(){
    var deptName = $('#deptName').val();
    var deptEmail = $('#deptEmail').val();
    var incomingAsset = $('.incomingAsset').find(":selected").val();
    var outgoingAsset = $('.outgoingAsset').find(":selected").val();

    createAccount().then((result) => {
      var deptAddress = result.address;

      createDepartment(deptName, deptEmail, incomingAsset, outgoingAsset, deptAddress).then((result) => {
        console.log('department', result);
      });
    });
  });

  //get departments list
  contract.getDepartmentsSize(function(error, result){
    var departmentsSize = result;
    var deptAddrArray = [];

    //get department address
    for(var i = 0; i < departmentsSize; i++){
      contract.getDepartmentAccAddr(i, function(error, result){
        deptAddrArray.push(result);
      });
    }

    //get department details
    for(var i=0; i < departmentsSize; i++){
      contract.getDepartment(deptAddrArray[i], function(error, result){
        $('.departmentTable').append('<tr><td>'+result.name+'</td><td>'+result.email+'</td><td>'+result.incomingAsset+'</td><td>'+result.outgoingAsset+'</td></tr>')
      });
    }
  });

  //function to get source list
  contract.getSourcesSize(function(error, result){
    var sourcesSize = result;
    var sourceAddrArray = [];

    //get source address
    for(var i = 0; i < sourcesSize; i++){
      contract.getSourceAccAddr(i, function(error, result){
        sourceAddrArray.push(result);
      });
    }

    //get source details
    for(var i=0; i < sourcesSize; i++){
      contract.getSource(sourceAddrArray[i], function(error, result){
        $('.sourcesTable').append('<tr><td>'+result.name+'</td><td>'+result.email+'</td><td>'+result.outgoingAsset+'</td></tr>')
      });
    }
  });

  //function to create source 
  $('.createSourceBtn').click(function(){
    var sourceName = $('#sourceName').val();
    var sourceEmail = $('#sourceEmail').val();
    var outgoingAsset = $('.outgoingAsset').find(":selected").val();

    createAccount().then((result) => {
      var sourceAddress = result.address;

      createSource(sourceName, sourceEmail, outgoingAsset, sourceAddress).then((result) => {
        console.log('source', result);
      });
    });
  });

  //function to convert an asset by a department
  $('.convertAssetBtn').click(function(){
    var assetName = $('#assetName').val();
    var expectedAmount = $('#expectedAmount').val();
    var actualAmount = $('#actualAmount').val();
    var originalAssetAddr;
    var convertedAssetAddr;

    getContractAddress(assetName).then((result) => {
      originalAssetAddr = result.address;
      getContractAddress(assetName).then((result) => {
        convertedAssetAddr = result.address;

        convertAsset(expectedAmount, actualAmount, originalAssetAddr, convertedAssetAddr).then((result) => {
          console.log('result', result);
        });
      });
    });
  });

  //function to add amount to asset by source
  $('.addAssetAmountBtn').click(function(){
    var amount = $('.amount').val();
    
    getContractAddress(assetName).then((result) => {
      addAmount(result).then((result) => {
        console.log('result', result);
      });
    });
  });

  //transfer asset by source to department
  $('.transferBtn').click(function(){
    var department = $('.selectedDepartment').find(":selected").val();
    var amount = $('#amount').val();

    var deptFrom = contract.getDepartmentAccAddr(department);
    var deptTo = contract.getDepartmentAccAddr(department);

    outgoingAssetAddr = contract.getAssetContractAddress(assetName);
    transferAsset(deptFrom, deptTo, amount, outgoingAssetAddr).then((result) => {
      console.log('result', result);
    });
  });

});
