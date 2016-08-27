jQuery(function($){
  // var util = {
  //   store: function(namespace, data){
  //     if (arguments.length > 1){
  //       return localStorage.setItem(namespace, JSON.stringify(data));
  //     } else {
  //       var store = localStorage.getItem(namespace);
  //       return (store && JSON.parse(store)) || [];
  //     }
  //   }
  // };

  var Game = {
    init: function(){
      this.acid = document.getElementById('acid');
      this.acidQty = document.getElementById('acidQty');
      this.acidAdd = document.getElementById('acidAdd');
      this.cocaine = document.getElementById('cocaine');
      this.cocaineQty = document.getElementById('cocaineQty');
      this.ecstasy = document.getElementById('ecstasy');
      this.ecstasyQty = document.getElementById('ecstasyQty');
      this.lean = document.getElementById('lean');
      this.leanQty = document.getElementById('leanQty');
      this.heroin = document.getElementById('heroin');
      this.heroinQty = document.getElementById('heroinQty');
      this.weed = document.getElementById('weed');
      this.weedQty = document.getElementById('weedQty');
      this.shrooms = document.getElementById('shrooms');
      this.shroomsQty = document.getElementById('shroomsQty');
      this.speed = document.getElementById('speed');
      this.speedQty = document.getElementById('speedQty');
      this.player = document.getElementById('player');
      this.getPricesButton = document.getElementById('getPrices');
      this.daysLeft = document.getElementById('daysLeft');
      this.money = document.getElementById('money');
      this.loanShark = true;
      this.daysRemaining = 30;
      this.days = 0;
      this.totalMoney = 100;
      this.owedMoney,
      this.totalSpace,
      this.inventory,
      this.totalHealth,
      this.acidPrice,
      this.cocainePrice,
      this.ecstasyPrice,
      this.leanPrice,
      this.heroinPrice,
      this.weedPrice,
      this.speedPrice,
      this.shroomsPrice,
      this.playerName,
      this.render();
    },
    bindEvents: function(){
      this.acidAdd.addEventListener('click', this.addValue.bind(this));
    },
    getQty: function(){
      this.acidQuantity = $('#acidQty').val();
      this.cocaineQuantity = $('#cocaineQty').html();
      parseInt(this.cocaineQuantity, 10);
    },
    updateQuantity: function(){
      console.log('this.acidQuantity');
      // this.acidQty.innerHTML = this.acidQuantity;
    },
    randomDrugPrice: function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    addValue: function(){
      this.getQty();
      this.acidQuantity ++;
      this.updateQuantity();
    },
    getDrugPrices: function(){
      this.acidPrice = this.randomDrugPrice(100, 449);
      this.cocainePrice = this.randomDrugPrice(150, 499);
      this.ecstasyPrice = this.randomDrugPrice(10, 59);
      this.leanPrice = this.randomDrugPrice(100, 349);
      this.heroinPrice = this.randomDrugPrice(500, 895);
      this.weedPrice = this.randomDrugPrice(300, 899);
      this.shroomsPrice = this.randomDrugPrice(60, 134);
      this.speedPrice = this.randomDrugPrice(70, 249);
    },
    getPlayerInfo: function(){
      this.playerName = prompt('What is your street name??');

    },
    loanSharkHelp: function(){
      var answer = prompt('Would you like to borrow $1000 from the Loan Shark??  Type Yes to accept or no to not get yourself into debt!');
      if (answer === 'Yes' || answer === 'yes' || answer === 'y' || answer === 'Y') {
        loanShark = true;
        this.totalMoney = 1000;
      }
    },
    updateDay: function(){
      this.daysLeft.innerHTML = this.daysRemaining;
      this.daysRemaining --;
    },
    updatePlayerName: function(){
      this.player.innerHTML = '<span> ' + this.playerName + '</span>';
    },
    updateMoney: function(){
      this.money.innerHTML = '$ ' + this.totalMoney;
    },
    updateDrugPrices: function(){
      this.getDrugPrices();
      this.acid.innerHTML = '$' + this.acidPrice;
      this.cocaine.innerHTML = '$' + this.cocainePrice;
      this.ecstasy.innerHTML = '$' + this.ecstasyPrice;
      this.lean.innerHTML = '$' + this.leanPrice;
      this.heroin.innerHTML = '$' + this.heroinPrice;
      this.weed.innerHTML = '$' + this.weedPrice;
      this.shrooms.innerHTML = '$' + this.shroomsPrice;
      this.speed.innerHTML = '$' + this.speedPrice;
    },
    render: function(){
      // if (this.days < 1){
      //   this.getPlayerInfo();
      //   this.loanSharkHelp();
      // }
      this.bindEvents();
      this.updateDrugPrices();
      this.updatePlayerName();
      this.updateMoney();
      this.updateDay();
      this.addValue();
    }
  }

  /**Each drug has a 1 in 8 chance of not being available. If the cops do a bust, the randomly selected price is multiplied by 4. If addicts are buying at outrageous prices, the price is multiplied by 8. Odds:
  Cheap Acid (/4): 1 in 17)
  Cops bust Cocaine (x4): 1 in 35 Addicts buy Cocaine (x8): 1 in 35
  Cops bust Ecstasy (x4): 1 in 13 Cheap Ecstasy (/8): 1 in 11
  Cops bust PCP (x4): 1 in 20 Addicts buy PCP (x8): 1 in 20
  Cops bust Heroin (x4): 1 in 25 Addicts buy Heroin (x8): 1 in 25
  Cops bust Weed (x4): 1 in 13 Cheap Weed (/4): 1 in 10
  Addicts buy Shrooms: 1 in 17
  Cops bust Speed (x4): 1 in 15 Addicts buy Speed (x8): 1 in 20

  You have a 1 in 7 chance of being offered more pockets, and a 1 in 7 chance of being offered a gun.

  Officer Hardass has a 1 in 7 chance of finding you. If you don’t have any drugs, they won’t chase you. If you choose to fight, you have a 1 in 4 chance of killing an officer. They have a 1 in 6 chance of wounding you, and a 1 in 25 chance of killing you. If you run, you have a 1 in 15 chance of losing all your dope and half your cash.**/
  Game.init();
});