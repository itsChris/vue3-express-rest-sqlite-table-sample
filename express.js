// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database(':memory:')

// db.serialize(function () {
//     db.run('CREATE TABLE lorem (info TEXT)')
//     var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
  
//     for (var i = 0; i < 10; i++) {
//       stmt.run('Ipsum ' + i)
//     }
  
//     stmt.finalize()
  
//     db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
//       console.log(row.id + ': ' + row.info)
//     })
//   })
  
//   db.all('select * from lorem', function(err, data){
//     //res.status(200).json(data);
//     console.log(data)
//   });


//   db.close()

const express = require('express')
const app = express()
const db = require("./db/employees")
const port = 3333

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/employees', async (req, res) => {
    const employees = await db.getAllEmployees();
    res.status(200).json({ employees });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})