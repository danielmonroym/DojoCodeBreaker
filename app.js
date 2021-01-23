let express = require ('express'),
cb= require('./codebreaker');

let app = express();
app.get('/', function (req, res){
    res.send({message: 'CodeBreaker'});
  });
app.get('/setsecret/:secret', function (req, res){
  number = req.params.secret;
  cb.setSecret(number);
  
  res.send({message: 'Ok, let the game begins'});
});

app.get('/guess/:number', function (req, res){
  number = req.params.number;
  res.send({result: cb.codebreaker(number)});
});

app.get('/upgrade/', function (req, res){
  res.send({message: 'Ok upgraded!!!!'});
});

app.get('/delete/', function (req, res){
  res.send({message: 'Ok Deleted!!!!'});
});

const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in http://localhost:${PORT}`));

