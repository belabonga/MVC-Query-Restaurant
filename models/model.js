const pool = require('../config/connection');
const { Menu, Category } = require('./class');

class Model {
    static query1(data) {
        const query = `
        SELECT menus.name, price, stock, categories.name AS category, "createdAt" FROM menus
        INNER JOIN categories ON menus."CategoryId" = categories.id
        WHERE categories.name = 'Drink' AND '[2021-05-01, 2021-06-30]'::daterange @> menus."createdAt";
        `

        pool.query(query, (err, res) => {
            if (err) console.log(err)
            else {
                const result = res.rows.map(el => {
                    return new Menu (el.name, el.price, el.stock, el.category, el.createdAt,)
                })
                data(null, result)
            }
        })
    }
    
    static query2(data) {
        const query = `
        SELECT menus.name, price, stock, categories.name AS category, "createdAt" FROM menus
        INNER JOIN categories ON menus."CategoryId" = categories.id
        ORDER BY stock DESC LIMIT 2;
        `

        pool.query(query, (err, res) => {
            if (err) console.log(err)
            else {
                const result = res.rows.map(el => {
                    return new Menu (el.name, el.price, el.stock, el.category, el.createdAt,)
                })
                data(null, result)
            }
        })
    }

    static query3(data) {
        const query = `
        SELECT menus.name, price, stock, categories.name AS category, "createdAt" FROM menus
        INNER JOIN categories ON menus."CategoryId" = categories.id
        WHERE menus.name ILIKE '%burger%';
        `

        pool.query(query, (err, res) => {
            if (err) console.log(err)
            else {
                const result = res.rows.map(el => {
                    return new Menu (el.name, el.price, el.stock, el.category, el.createdAt,)
                })
                data(null, result)
            }
        })
    }

    static query4(data) {
        const query = `
        SELECT menus.name, price, stock, categories.name AS category, "createdAt" FROM menus
        INNER JOIN categories ON menus."CategoryId" = categories.id
        WHERE'[2021-06-02, 2021-07-09]'::daterange @> menus."createdAt"
        ORDER BY stock DESC LIMIT 1;
        `

        pool.query(query, (err, res) => {
            if (err) console.log(err)
            else {
                const result = res.rows.map(el => {
                    return new Menu (el.name, el.price, el.stock, el.category, el.createdAt,)
                })
                data(null, result)
            }
        })
    }

    static query5(data) {
        const query = `
        SELECT categories.name, sum(menus.stock) AS "totalStock", sum(menus.stock * menus.price) AS "totalSales" FROM menus
        INNER JOIN categories ON menus."CategoryId" = categories.id
        GROUP BY categories.name
        HAVING sum(menus.stock * menus.price) > 3000000;
        `

        pool.query(query, (err, res) => {
            if (err) console.log(err)
            else {
                const result = res.rows.map(el => {
                    return new Category (el.name, +el.totalStock, +el.totalSales)
                })
                data(null, result)
            }
        })
    }
}

module.exports = Model