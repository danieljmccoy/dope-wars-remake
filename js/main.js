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
      this.acidSubtract = document.getElementById('acidSubtract');
      this.acidBuy = document.getElementById('buyAcid');
      this.acidSell = document.getElementById('sellAcid');
      this.acidStock = 0;
      this.cocaine = document.getElementById('cocaine');
      this.cocaineQty = document.getElementById('cocaineQty');
      this.cocaineAdd = document.getElementById('cocaineAdd');
      this.cocaineSubtract = document.getElementById('cocaineSubtract');
      this.cocaineBuy = document.getElementById('buyCocaine');
      this.cocaineSell = document.getElementById('sellCocaine');
      this.cocaineStock = 0;
      this.ecstasy = document.getElementById('ecstasy');
      this.ecstasyQty = document.getElementById('ecstasyQty');
      this.ecstasyAdd = document.getElementById('ecstasyAdd');
      this.ecstasySubtract = document.getElementById('ecstasySubtract');
      this.ecstasyBuy = document.getElementById('buyEcstasy');
      this.ecstasySell = document.getElementById('sellEcstasy');
      this.ecstasyStock = 0;
      this.lean = document.getElementById('lean');
      this.leanQty = document.getElementById('leanQty');
      this.leanAdd = document.getElementById('leanAdd');
      this.leanSubtract = document.getElementById('leanSubtract');
      this.leanBuy = document.getElementById('buyLean');
      this.leanSell = document.getElementById('sellLean');
      this.ecstasyStock = 0;
      this.heroin = document.getElementById('heroin');
      this.heroinQty = document.getElementById('heroinQty');
      this.heroinAdd = document.getElementById('heroinAdd');
      this.heroinSubtract = document.getElementById('heroinSubtract');
      this.heroinBuy = document.getElementById('buyHeroin');
      this.heroinSell = document.getElementById('sellHeroin');
      this.heroinStock = 0;
      this.weed = document.getElementById('weed');
      this.weedQty = document.getElementById('weedQty');
      this.weedAdd = document.getElementById('weedAdd');
      this.weedSubtract = document.getElementById('weedSubtract');
      this.weedBuy = document.getElementById('buyWeed');
      this.weedSell = document.getElementById('sellWeed');
      this.weedStock = 0;
      this.shrooms = document.getElementById('shrooms');
      this.shroomsQty = document.getElementById('shroomsQty');
      this.shroomsAdd = document.getElementById('shroomsAdd');
      this.shroomsSubtract = document.getElementById('shroomsSubtract');
      this.shroomsBuy = document.getElementById('buyShrooms');
      this.shroomsSell = document.getElementById('sellShrooms');
      this.shroomStock = 0;
      this.speed = document.getElementById('speed');
      this.speedQty = document.getElementById('speedQty');
      this.speedAdd = document.getElementById('speedAdd');
      this.speedSubtract = document.getElementById('speedSubtract');
      this.speedBuy = document.getElementById('buySpeed');
      this.speedSell = document.getElementById('sellSpeed');
      this.speedStock = 0;
      this.player = document.getElementById('player');
      this.getPricesButton = document.getElementById('getPrices');
      this.daysLeft = document.getElementById('daysLeft');
      this.money = document.getElementById('money');
      this.loanShark = true;
      this.daysRemaining = 30;
      this.days = 0;
      this.totalMoney = 100;
      this.acidQuantity = 10;
      this.owedMoney,
      this.totalSpace,
      this.inventory,
      this.totalHealth,
      this.acidPrice,
      this.acidStock = 0,
      this.cocainePrice,
      this.cocaineStock = 0,
      this.ecstasyPrice,
      this.ecstasyStock = 0,
      this.leanPrice,
      this.leanStock = 0,
      this.heroinPrice,
      this.heroinStock = 0,
      this.weedPrice,
      this.weedStock = 0,
      this.speedPrice,
      this.speedStock = 0,
      this.shroomsPrice,
      this.shroomsStock = 0,
      this.playerName,
      this.render();
    },
    bindEvents: function(){
      this.acidAdd.addEventListener('click', this.addAcid.bind(this), false);
      this.acidSubtract.addEventListener('click', this.subtractAcid.bind(this), false);
      this.acidBuy.addEventListener('click', this.buyAcid.bind(this), false);
      this.acidSell.addEventListener('click', this.sellAcid.bind(this), false);
      this.cocaineAdd.addEventListener('click', this.addCocaine.bind(this), false);
      this.cocaineSubtract.addEventListener('click', this.subtractCocaine.bind(this), false);
      this.cocaineBuy.addEventListener('click', this.buyCocaine.bind(this), false);
      this.cocaineSell.addEventListener('click', this.sellCocaine.bind(this), false);
      this.ecstasyAdd.addEventListener('click', this.addEcstasy.bind(this), false);
      this.ecstasySubtract.addEventListener('click', this.subtractEcstasy.bind(this), false);
      this.ecstasyBuy.addEventListener('click', this.buyEcstasy.bind(this), false);
      this.ecstasySell.addEventListener('click', this.sellEcstasy.bind(this), false);
      this.leanAdd.addEventListener('click', this.addLean.bind(this), false);
      this.leanSubtract.addEventListener('click', this.subtractLean.bind(this), false);
      this.leanBuy.addEventListener('click', this.buyLean.bind(this), false);
      this.leanSell.addEventListener('click', this.sellLean.bind(this), false);
      this.heroinAdd.addEventListener('click', this.addHeroin.bind(this), false);
      this.heroinSubtract.addEventListener('click', this.subtractHeroin.bind(this), false);
      this.heroinBuy.addEventListener('click', this.buyHeroin.bind(this), false);
      this.heroinSell.addEventListener('click', this.sellHeroin.bind(this), false);
      this.weedAdd.addEventListener('click', this.addWeed.bind(this), false);
      this.weedSubtract.addEventListener('click', this.subtractWeed.bind(this), false);
      this.weedBuy.addEventListener('click', this.buyWeed.bind(this), false);
      this.weedSell.addEventListener('click', this.sellWeed.bind(this), false);
      this.speedAdd.addEventListener('click', this.addSpeed.bind(this), false);
      this.speedSubtract.addEventListener('click', this.subtractSpeed.bind(this), false);
      this.speedBuy.addEventListener('click', this.buySpeed.bind(this), false);
      this.speedSell.addEventListener('click', this.sellSpeed.bind(this), false);
      this.shroomsAdd.addEventListener('click', this.addShrooms.bind(this), false);
      this.shroomsSubtract.addEventListener('click', this.subtractShrooms.bind(this), false);
      this.shroomsBuy.addEventListener('click', this.buyShrooms.bind(this), false);
      this.shroomsSell.addEventListener('click', this.sellShrooms.bind(this), false);
    },
    buyAcid: function(){
      if(this.totalMoney > this.acidPrice){
        this.getQty();
        var amt = this.acidQuantity;
        var maxQty = Math.floor(this.totalMoney/this.acidPrice);
        if(amt <= maxQty){
          var total = amt * this.acidPrice;
          this.totalMoney = this.totalMoney - total;
          this.acidStock =+ amt;
          console.log(this.acidStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellAcid: function(){
      if(this.acidStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyCocaine: function(){
      if(this.totalMoney > this.cocainePrice){
        this.getQty();
        var amt = this.cocaineQuantity;
        var maxQty = Math.floor(this.totalMoney/this.cocainePrice);
        if(amt <= maxQty){
          var total = amt * this.cocainePrice;
          this.totalMoney = this.totalMoney - total;
          this.concaineStock =+ amt;
          console.log(this.concaineStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellCocaine: function(){
      if(this.cocaineStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyEcstasy: function(){
      if(this.totalMoney > this.ecstasyPrice){
        this.getQty();
        var amt = this.ecstasyQuantity;
        var maxQty = Math.floor(this.totalMoney/this.ecstasyPrice);
        if(amt <= maxQty){
          var total = amt * this.ecstasyPrice;
          this.totalMoney = this.totalMoney - total;
          this.ecstasyStock =+ amt;
          console.log(this.ecstasyStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellEcstasy: function(){
      if(this.ecstasyStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyLean: function(){
      if(this.totalMoney > this.leanPrice){
        this.getQty();
        var amt = this.leanQuantity;
        var maxQty = Math.floor(this.totalMoney/this.leanPrice);
        if(amt <= maxQty){
          var total = amt * this.leanPrice;
          this.totalMoney = this.totalMoney - total;
          this.leanStock =+ amt;
          console.log(this.leanStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellLean: function(){
      if(this.leanStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyHeroin: function(){
      if(this.totalMoney > this.heroinPrice){
        this.getQty();
        var amt = this.heroinQuantity;
        var maxQty = Math.floor(this.totalMoney/this.heroinPrice);
        if(amt <= maxQty){
          var total = amt * this.heroinPrice;
          this.totalMoney = this.totalMoney - total;
          this.heroinStock =+ amt;
          console.log(this.heroinStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellHeroin: function(){
      if(this.heroinStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyWeed: function(){
      if(this.totalMoney > this.weedPrice){
        this.getQty();
        var amt = this.weedQuantity;
        var maxQty = Math.floor(this.totalMoney/this.weedPrice);
        if(amt <= maxQty){
          var total = amt * this.weedPrice;
          this.totalMoney = this.totalMoney - total;
          this.weedStock =+ amt;
          console.log(this.weedStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellWeed: function(){
      if(this.weedStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buySpeed: function(){
      if(this.totalMoney > this.speedPrice){
        this.getQty();
        var amt = this.speedQuantity;
        var maxQty = Math.floor(this.totalMoney/this.speedPrice);
        if(amt <= maxQty){
          var total = amt * this.speedPrice;
          this.totalMoney = this.totalMoney - total;
          this.speedStock =+ amt;
          console.log(this.speedStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellSpeed: function(){
      if(this.speedStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    buyShrooms: function(){
      if(this.totalMoney > this.shroomsPrice){
        this.getQty();
        var amt = this.shroomsQuantity;
        var maxQty = Math.floor(this.totalMoney/this.shroomsPrice);
        if(amt <= maxQty){
          var total = amt * this.shroomsPrice;
          this.totalMoney = this.totalMoney - total;
          this.shroomsStock =+ amt;
          console.log(this.shroomsStock);
        } else {
          alert("You don't have enough money for that many drugs.")
        }
      } else {
        alert('Your broke ass can\'t afford this.');
      }
    },
    sellShrooms: function(){
      if(this.shroomsStock > 0){
        alert('You have drugs to sell');
      } else {
        alert('Have you been using your own stuff??  You don\'t have any to sell');
      }
    },
    getQty: function(){
      this.acidQuantity = parseInt(this.acidQty.textContent);
      // this.acidQuantity = parseInt($('#acidQty').html());
      this.cocaineQuantity = parseInt(this.cocaineQty.textContent);
      // this.cocaineQuantity = parseInt($('#cocaineQty').html());
      this.ecstasyQuantity = parseInt(this.ecstasyQty.textContent);
      // this.ecstasyQuantity = parseInt($('#ecstasyQty').html());
      this.leanQuantity = parseInt(this.leanQty.textContent);
      // this.leanQuantity = parseInt($('#leanQty').html());
      this.heroinQuantity = parseInt(this.heroinQty.textContent);
      // this.heroinQuantity = parseInt($('#heroinQty').html());
      this.weedQuantity = parseInt(this.weedQty.textContent);
      // this.weedQuantity = parseInt($('weedQty').html());
      this.speedQuantity = parseInt(this.speedQty.textContent);
      // this.speedQuantity = parseInt($('speedQty').html());
      this.shroomsQuantity = parseInt(this.shroomsQty.textContent);
      // this.shroomsQuantity = parseInt($('#shroomsQty').html());
    },
    updateQuantity: function(){
      this.acidQty.innerText = this.acidQuantity;
      this.cocaineQty.innerText = this.cocaineQuantity;
      this.ecstasyQty.innerText = this.ecstasyQuantity;
      this.leanQty.innerText = this.leanQuantity;
      this.heroinQty.innerText = this.heroinQuantity;
      this.weedQty.innerText = this.weedQuantity;
      this.speedQty.innerText = this.speedQuantity;
      this.shroomsQty.innerText = this.shroomsQuantity;
    },
    randomDrugPrice: function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    addAcid: function(){
      this.getQty();
      this.acidQuantity ++;
      this.updateQuantity();
    },
    addCocaine: function(){
      this.getQty();
      this.cocaineQuantity ++;
      this.updateQuantity();
    },
    addEcstasy: function(){
      this.getQty();
      this.ecstasyQuantity ++;
      this.updateQuantity();
    },
    addLean: function(){
      this.getQty();
      this.leanQuantity ++;
      this.updateQuantity();
    },
    addHeroin: function(){
      this.getQty();
      this.heroinQuantity ++;
      this.updateQuantity();
    },
    addWeed: function(){
      this.getQty();
      this.weedQuantity ++;
      this.updateQuantity();
    },
    addSpeed: function(){
      this.getQty();
      this.speedQuantity ++;
      this.updateQuantity();
    },
    addShrooms: function(){
      this.getQty();
      this.shroomsQuantity ++;
      this.updateQuantity();
    },
    subtractAcid: function(){
      if(this.acidQuantity > 0){
        this.getQty();
        this.acidQuantity --;
        this.updateQuantity();
      };
    },
    subtractCocaine: function(){
      if(this.cocaineQuantity > 0){
        this.getQty();
        this.cocaineQuantity --;
        this.updateQuantity();
      };
    },
    subtractEcstasy: function(){
      if(this.ecstasyQuantity > 0){
        this.getQty();
        this.ecstasyQuantity --;
        this.updateQuantity();
      };
    },
    subtractLean: function(){
      if(this.leanQuantity > 0){
        this.getQty();
        this.leanQuantity --;
        this.updateQuantity();
      };
    },
    subtractHeroin: function(){
      if(this.heroinQuantity > 0){
        this.getQty();
        this.heroinQuantity --;
        this.updateQuantity();
      };
    },
    subtractWeed: function(){
      if(this.weedQuantity > 0){
        this.getQty();
        this.weedQuantity --;
        this.updateQuantity();
      };
    },
    subtractSpeed: function(){
      if(this.speedQuantity > 0){
        this.getQty();
        this.speedQuantity --;
        this.updateQuantity();
      };
    },
    subtractShrooms: function(){
      if(this.shroomsQuantity > 0){
        this.getQty();
        this.shroomsQuantity --;
        this.updateQuantity();
      };
    },
    getDrugPrices: function(){
      //Change back to 100, 449
      this.acidPrice = this.randomDrugPrice(10, 44);
      //150, 499
      this.cocainePrice = this.randomDrugPrice(15, 49);
      this.ecstasyPrice = this.randomDrugPrice(10, 59);
      //100, 349
      this.leanPrice = this.randomDrugPrice(10, 34);
      //500, 895
      this.heroinPrice = this.randomDrugPrice(50, 89);
      //300, 899
      this.weedPrice = this.randomDrugPrice(30, 89);
      //60, 134
      this.shroomsPrice = this.randomDrugPrice(6, 13);
      //70, 249
      this.speedPrice = this.randomDrugPrice(7, 24);
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
      this.updateDrugPrices();
      this.updatePlayerName();
      this.updateMoney();
      this.getQty();
      this.updateDay();
      this.bindEvents();
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
