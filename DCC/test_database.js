var mysql = require("mysql");

var con = mysql.createConnection({
  host: "192.168.122.20",
  user: "root",
  password: "dekvn@123321",
  database: "DCC2"
});


con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.query('SELECT * FROM DCC2.course_type',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

con.query('CREATE TABLE TEST (' +
                ' Stop_id int,' +
                ' Stop_name VARCHAR(100),' +
                ' Stop_lat VARCHAR(100),' +
                ' Stop_lon VARCHAR(100),' +
                ' PRIMARY KEY(Stop_id))' +
                'ENGINE=MEMORY',
                function(err, result){
                    if(err){
                        console.log("create table error");
                        return;
                    }
                    console.log("create table success");
                });

con.end(function(err){

});
