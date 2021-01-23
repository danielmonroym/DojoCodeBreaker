let express = require ('express'),
cb= require('./codebreaker');

let app = express();
app.get('/', function (req, res){
    res.send({message: 'CodeBreaker'});
  });
app.get('/setsecret/:secret', function (req, res){
  number = req.params.secret;
  cb.setSecret(number);
  
  res.send({message: 'Empieza a jugar'});
});

app.get('/guess/:number', function (req, res){
  number = req.params.number;
  res.send({result: cb.codebreaker(number)});
});



const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in http://localhost:${PORT}`));

