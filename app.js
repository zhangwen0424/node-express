"use strict"
const express = require('express');
const colors = require('colors');
const app = express();


app.get("/",(req, res)=>{
    let auth = "mornki";
    res.send("Hello "+auth);
});

app.get("/name",(req, res)=>{
    let auth = "mornki";
    res.send(auth);
});

app.listen("3030",()=>{
  console.log("app listen 3030:".brightYellow+colors.brightMagenta(" http://localhost:3030/"));
  require('./packages/index')// 做一些npm包测试
})

// 做一些登陆校验
const checkAuth = () => {
  console.log()
} 