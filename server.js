// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var	methodOverride = require("method-override");
	jwtExp = require("express-jwt");
	tokenSecret = require("./tokensecret.js");
	cookieParser = require("cookie-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//cookie parser
app.use(cookieParser(tokenSecret));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Routes =============================================================

var htmlRoutes = require("./routes/html-routes.js");
//var apiRoutes = require("./routes/api-routes.js");
var authRoutes = require("./routes/auth-routes.js");

// API MIDDLEWARE
app.use("/api", jwtExp({ secret: tokenSecret }));
//app.use("/api", apiRoutes);


// AUTH MIDDLEWARE
app.use("/auth", authRoutes);

// USER MIDDLEWARE
app.get("/", jwtExp({
  secret: tokenSecret,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.jwtAuthToken;
    }
    return null;
  },
  credentialsRequired: false
}), function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
});

app.use("/", htmlRoutes);

app.use(express.static("./public"));



// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
