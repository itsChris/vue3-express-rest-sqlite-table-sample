const knex = require("./knex");

function getAllEmployees() {
    return knex("employee").select("*");
}

module.exports = {
    getAllEmployees
}