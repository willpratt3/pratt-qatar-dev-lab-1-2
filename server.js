const express = require("express");
const port = 3000;
const skillsRouter = require("./routes/skills");
const morgan = require("morgan");
const methodOverride = require("method-override");

// create the express app
const app = express()

// configure server settings with app.set()
app.set("view engine", "ejs");

// mount our middleware with app.use()
app.use((req, res, next) => {
    console.log("If you get this message, I will have succeeded beyond all imagination here in Qatar");
    next();
});

app.use(morgan("dev"));
// there is also combined and tiny
app.use(express.urlencoded({extended: false}));

app.use(methodOverride("_method"));

// all routes pertaining to /skills/*
app.use("/skills", skillsRouter);
app.use('/', indexRouter);

app.listen(port, function() {
    console.log("express is listening on port: ${port}");
});