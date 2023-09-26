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
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

const seattleSales = document.getElementById("seattleSales");
const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = hours[i];
  ul.appendChild(li);
}
article.appendChild(ul);

seattle.calculateSales();
console.log(seattle);

seattleSales.appendChild(article);
