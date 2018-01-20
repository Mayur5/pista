/*App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if(typeof web3 !== undefined ){
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    }
    else{
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(App.web3Provider);
    }
    console.log('web3 check', web3);
  },

  signUp: function(){
    var email = $('#email').val();
    var keywords = $('#keywords').val();

    web3.eth.accounts.create();

    console.log('account', account);
  },

};
*/

$(function() {
  $(window).load(function() {
    /*App.init();*/
    /*if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }*/

    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    console.log('web3', web3);

    web3.eth.getAccounts(console.log);

    web3.eth.accounts.create('2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567');

    /*web3.personal.newAccount('2', function(error, result){
      console.log('newaccount', error);
      console.log('newaccount', result);
    });*/

  });

  $('.download').click(function(){
    console.log('downloadPrivetKey');
  });
});
