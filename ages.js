let guestAges = [16, 21, 18, 30, 15, 25];

let adults = guestAges.filter(function (age){
    return age >=18;
});

let minors = guestAges.filter(function(age){
    return age < 18;
})
console.log("Adults: " , adults);
console.log("Minors: " , minors);