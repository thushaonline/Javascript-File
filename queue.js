const customers = ["Alice", "Bob", "Charlie"];
const newLenght = customers.push("Diana");
customers.unshift("Ethan");
customers.shift();

let servedCustomer = customers.unshift();


console.log("Served Customer:", servedCustomer);
console.log("Updated Customers:", customers);

