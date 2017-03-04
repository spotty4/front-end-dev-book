// global declaration of 'use strict' (ES6) to avoid declaring
// it at the start of every function
'use strict';

(function (window) {
  var App = window.App || {};
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Deliverying order for ' + customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function (customerId) {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck # ' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };
  App.Truck = Truck;
  window.App = App;
}) (window);
