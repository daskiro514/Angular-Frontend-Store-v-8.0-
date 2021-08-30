var faker = require("faker");

var data = [];
var categories = ["Watersports", "Soccer", "Chess", "Running"];

faker.seed(100);

for (let i = 1; i <= 50; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price()),
        imageUrl: `https://source.unsplash.com/1600x900/?product/${i}`,
        quantity: faker.random.number(),
        category: category,
    })
}

module.exports = function () {
    return {
        products: data,
        categories: categories,
        orders: []
    }
}
