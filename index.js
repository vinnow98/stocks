// values= 1.price it was bought at, current price,  percentage

const stocks = [
  { ticker: "APPL", boughtPrice: 152.57 },
  { ticker: "META", boughtPrice: 264.5 },
];

const stockMap = stocks.map(function (stocks) {
  return {
    title: stocks.ticker,
    fivetwenty: stocks.boughtPrice * 1.2,
    boughtPrice: stocks.boughtPrice,
    fourtwenty: stocks.boughtPrice * 0.82,
    four: stocks.boughtPrice * 0.8,
    threetwenty: stocks.boughtPrice * 0.62,
    three: stocks.boughtPrice * 0.6,
    twofifty: stocks.boughtPrice * 0.5,
    two: stocks.boughtPrice * 0.4,
    onefifty: stocks.boughtPrice * 0.3,
    one: stocks.boughtPrice * 0.2,
  };
});

console.log(JSON.stringify(stockMap, null, 2));
console.log(stockMap); //
