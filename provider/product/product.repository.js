const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "Gem Visa", "v1")],
            ["10", new Product("10", "28 Degrees", "v1")],
            ["11", new Product("11", "MyFlexiPay", "v2")],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = ProductRepository;
