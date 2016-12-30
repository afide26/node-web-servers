const express = require('express');
const hbs     = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});

app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    welcomeMessage: 'Welcome to the about page'
  });
});


app.get('/projects', (req,res)=>{
  res.render('projects.hbs',{
    pageTitle: 'Projects Page',
    welcomeMessage: 'Welcome to the projects page',
    projects: ['NodeJS', 'AngularJS1', 'AngularJS2', 'React', 'Cloud Deployment', 'Testing']
  });
});

app.listen(port, ()=>{
  console.log(`Listening at port ${port}`);
});