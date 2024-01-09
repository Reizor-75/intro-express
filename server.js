// important modules
import express from "express";
import { todos } from "./data/todo-data.js"; 
import { students } from "./data/students-data.js";
import { iceCreams } from "./data/iceCreams-data.js";
//create Express app
const app = express();

//todos
/*
//configure the app (app.set)
app.set("view engine", "ejs");
//mount Middleware (app.use)

//mount routes 
app.get("/", function(req, res){
  // '/' route to a specific location
  //- The request (`req`) object has properties and methods to access information regarding the current HTTP *request*, including any data the browser/tool has sent.
  // - The response (`res`) object contains properties and methods used to *end the request/response cycle* - like we’ve done so far using the `res.send` method.
  // res.send("<h1> hello Express</h1>"); 
  
  res.redirect("/home");
});

app.get("/home", function(req, res){
  res.render("home");
})

app.get("/todos", function(req, res){
  res.render("todos/index", {
    myName: "Michelle",
    favFood: "tofu",
    todos: todos
  });
})
//tell the app to listen on port 3000
app.listen(3000, function(){
  console.log("Listening on port 3000");
});
*/

//students
/*
// configure the app (app.set)
app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes
  //first route
  // app.get("/", function(req, res){
  //   res.send("<h1>Second Try<h1>");
  // });

  //refactoring route
  // app.get("/students", function(req, res){
  //   res.render("students")
  // });

  app.get('/students', function(req, res) {
    res.render('students/index', {
      students: students
    })
  })

  app.get("/", function(req, res){
    res.redirect("/students");
  });

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
*/

//Ice Cream
// configure the app (app.set)
app.set("view engine", "ejs");

// mount Middleware (app.use)

// mount routes
app.get('/iceCreams', function(req, res) {
  res.render('iceCreams/index', {
  })
})

// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});