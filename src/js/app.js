$(function() {
  var accountCreated;

  async function createAccount() {
    let response = await web3.eth.accounts.create(web3.utils.randomHex(32));

    return response;
  }

  $(window).load(function() {

    $('.signUpBtn').click(function(){
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/AzPNR6IGk31xJWmPGDte"));
      }

      createAccount().then((result) => {
        accountCreated = result;
        $('.accountNumber')[0].innerHTML = result.address;
        $('.publicKey')[0].innerHTML = result.address;
      });

      $('.userDiv').show();
      $('.signUpForm').hide();

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

  });

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

});
