const knex = require("knex");
const connectKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "employees.db"
    }
});

module.exports = connectKnex;