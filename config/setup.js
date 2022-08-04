const pool = require('./connection');

// CAUTION - THIS ACTION WILL DELETE ALL TABLES
// UNCOMMENT IF NEEDED
const delCategories = `DROP TABLE IF EXISTS "categories";`
const delMenus = `DROP TABLE IF EXISTS "menus";`

const qCategories = `CREATE TABLE IF NOT EXISTS "categories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR
);`

const qMenus = `CREATE TABLE IF NOT EXISTS "menus" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "CategoryId" INTEGER,
    "stock" INTEGER,
    "price" INTEGER,
    "createdAt" DATE,
    FOREIGN KEY("CategoryId")
    REFERENCES "categories"(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);`

// CATEGORIES

// DELETE MENUS TABLE
pool.query(delMenus, (err, res) => {
    if (err) console.log(err)
    else { console.log(res)

        // DELETE CATEGORIES TABLE
        pool.query(delCategories, (err, res) => {
            if (err) console.log(err)
            else { console.log(res)
                
                // CREATE CATEGORIES TABLE
                pool.query(qCategories, (err, res) => {
                    if(err) console.log(err)
                    else { console.log(res)

                        // CREATE MENUS TABLE
                        pool.query(qMenus, (err, res) => {
                            if(err) console.log(err)
                            else { console.log(res)

                            }
                        })
                    }
                })
            }
        })
    }
})