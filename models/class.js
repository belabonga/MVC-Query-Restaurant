class Menu{
    constructor(name, price, stock, category, createdAt){
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.category = category;
        this.createdAt = createdAt;
    }
}

class Category{
    constructor(category, totalStock, totalSales){
        this.category = category;
        this.totalStock = +totalStock;
        this.totalSales = +totalSales;
    }
}

module.exports = {Menu, Category}