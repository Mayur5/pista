$(function() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } 
  else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://35.154.203.141:8545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte"));
  }
  var accountCreated;

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

  async function getCurrentAccount(){
    let response = await web3.eth.getAccounts();

    return response;
  }

  async function setConversionRate(incomingAsset, outgoingAsset, rate){
    let response = await contract.setConversionRate(incomingAsset, outgoingAsset, rate);

    return response;
  }

  $(window).load(function() {
    var userEmail;

    $('select').material_select();

    //on user type select
    $('.departmentClick').click(function(){
      localStorage.setItem('user', 'department');
      $('.selectUserDiv').hide();
      $('.checkUserDiv').show();
    });
    $('.sourceClick').click(function(){
      localStorage.setItem('user', 'source');
      $('.selectUserDiv').hide();
      $('.checkUserDiv').show();
    });

    //get user email to check if valid
    $('.returnUserCheck').click(function(){
      var userType = localStorage.getItem('user');

      if(userType == 'department'){
        location.href = 'departmentSignIn.html';
      }
      else
        location.href = 'sourceSignIn.html';
    });

    //check if user is valid - sign in user
    /*$('.deptSignInBtn').click(function(){
      if (typeof web3 !== 'undefined') {
          window.web3 = new Web3(web3.currentProvider);
          if (web3.currentProvider.isMetaMask === true) {
            getCurrentAccount().then((result) => {
              var currentAccount = result[0];
              //if(account == currentAccount){
                $('.accountAddr')[0].innerHTML = result[0];
                $('.signUpForm').hide();
                $('.errorDiv').hide();
                $('.successDiv').show();
              //}
            });
          }
          else{
                $('.signUpForm').hide();
                $('.errorDiv').show();
                $('.successDiv').hide();
            /*$.confirm({
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
        }

      contract.getAccWithEmail(email, function(error, result){
        var account = result.address;

        
      });
    });*/

    //new user
    $('.newUserCheck').click(function(){
      var userType = localStorage.getItem('user');

      if(userType == 'department'){
        location.href = 'signUp.html';
      }
      else{
        location.href = 'sourceSignUp.html';
      }
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
                location.href = './metamaskHelp.html';
              }
            }
          }
        });
      }
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

  //go to user sign up page
  $('.nextBtn').click(function(){
    var userType = localStorage.getItem('user');

    if(user == 'department'){
      location.href = 'signUp.html';
    }
    else{
      location.href = 'sourceSignUp.html';
    }
  });

  //save conversion rate of asset
  $('.conversionRateBtn').click(function(){
    var incomingAsset = $('.incomingAsset').find(":selected").val();
    var outgoingAsset = $('.outgoingAsset').find(":selected").val();
    var conversionRate = $('#conversionAmount').val();

    setConversionRate(incomingAsset, outgoingAsset, conversionRate).then((result) => {
      console.log('result', result);
    });

  });

  //function to create department
  $('.createDeptBtn').click(function(){
    var deptName = $('#deptName').val();
    var deptEmail = $('#deptEmail').val();
    var incomingAsset = $('.incomingAsset').find(":selected").val();
    var outgoingAsset = $('.outgoingAsset').find(":selected").val();

    createTempDepartment(deptName, deptEmail, incomingAsset, outgoingAsset).then((result) => {
      console.log('department', result);
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
