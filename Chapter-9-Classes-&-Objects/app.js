const student = {
  name: "Pradeep Khatri",
  institute: "St Xavier's College, Jaipur",
  percentile: 47,
  printPercent: function () {
    console.log("Percentage of " + this.name + " is " + this.percentile);
  },
};

const employee = {
  calcTax() {
    console.log("Tax Rate is 74%.");
  },
};

const karanMalviya = {
  salary: 50000,
};

const ravinSingh = {
  salary: 50000,
};

const dhirendraShoni = {
  salary: 88000,
};

karanMalviya.__proto__ = employee;
ravinSingh.__proto__ = employee;
dhirendraShoni.__proto__ = employee;

// Classes in JavaScript
class ToyotaCar {
  constructor(brand) {
    console.log("Creating new object");
    this.brand = brand;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 8);
console.log(lexus);
