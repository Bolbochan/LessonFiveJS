const cargo = ["Soap", "Meat", "Cofee", "Candy", "Beer"]
const price = {
    soap: 50,
    meat: 150,
    cofee: 300,
    candy: 250,
    beer: 25,
};
const buy = {
    soap: 5,
    meat: 10,
    cofee: 2,
    candy: 8,
    beer: 6,
};

const cargoData = cargo.map((name) => {
    return {
        name: name,
        prices: price[name.toLowerCase()],
        bought: buy[name.toLowerCase()],
        AllPrice: price[name.toLowerCase()] * buy[name.toLowerCase()],
    }
});
const cargoDataBot = cargoData.slice()
console.log(cargoData)//check info

const totalPrice = cargoData.reduce((sum, carg) => {
    return sum + carg.AllPrice
}, 0);
console.log("Total purchases -", totalPrice)

const mediumPrice = cargoData.reduce((sum, carg) => {
    return sum + carg.prices
}, 0);
console.log("Medium purchases -", mediumPrice / cargo.length)

// Як вивести найблільше число нз