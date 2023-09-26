const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop
const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

seattle.calculateSales();
tokyo.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH3 = document.createElement("h3");
seattleH3.textContent = seattle.location;
salesData.appendChild(seattleH3);

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// add the title for the location
const tokyoH3 = document.createElement("h3");
tokyoH3.textContent = tokyo.location;
salesData.appendChild(tokyoH3);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}

salesData.appendChild(tokyoUl);
