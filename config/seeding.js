const pool = require('./connection');
const fs = require('fs');

const dataCategories = JSON.parse(fs.readFileSync("../data/categories.json", "utf-8"))
const vCat = dataCategories.map(el => {return `('${el.name}')`})

const query = `
    INSERT INTO "categories" (name)
    VALUES ${vCat.join(",\n")};`

const dataMenus = JSON.parse(fs.readFileSync("../data/menus.json", "utf-8"))
const vMenu = dataMenus.map(el => {return `('${el.name}', ${el.CategoryId}, ${el.stock}, ${el.price}, '${el.createdAt}')`})

const query2 = `
    INSERT INTO "menus" (name, "CategoryId", stock, price, "createdAt")
    VALUES ${vMenu.join(",\n")};
    `

// INSERT CATEGORIES VALUE
pool.query(query, (err, res) => {
    if (err) console.log(err)
    else { console.log(res)

        // INSERT MENUS VALUE
        pool.query(query2, (err, res) => {
            if (err) console.log(err)
            else console.log(res)
        })
    }
})