let cartPrices = [12.99, 4.50, 25.00, 9.99];
let total =0; 

cartPrices.forEach(function(price){
    total += price;
});

console.log("Your total is: $" + total);


