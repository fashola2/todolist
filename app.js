const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');
app.use(bodyparser.urlencoded({extended: false}))
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(expressvalidator())


const todos = [

]

const complete = [

]



app.get("/", function(req, res){
  res.render('index', {
    todos: todos,
    complete: complete
  });
});

app.post('/', function (req, res){
  todos.push(req.body.todo);
  res.redirect('/')
})

app.post("/complete", function (req, res) {
  const remove = req.body.button
  todos.splice(todos.indexOf(remove), 1)
  complete.push(remove);
  res.redirect('/');
})

app.listen(3004, function(){
  console.log("Express started on port 3000")
})
