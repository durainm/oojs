/** NameSpace: 
A container which lets developers bundle all functionality under a unique, application-specific name. 
Unfortunately JavaScript doesn’t provide namespace by default. So anything (function, method, object, variable) 
we create in JavaScript is global and we continue polluting that global namespace by adding more to that.

or

In most programming languages we know the concept of namespaces (or packages). 
Namespaces allow us to group code and help us to avoid name-collisions.
**/

var MYAPPLICATION = {
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var p = new MYAPPLICATION.product(100);
        alert(this.calculateTax(p.getCost()));
    }
}

var newProduct = new MYAPPLICATION.product(200);
alert(p.getPrice());

