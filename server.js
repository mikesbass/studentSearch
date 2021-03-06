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
const	jwtExp = require("express-jwt");
const	tokenSecret = require("./tokensecret.js");
const	cookieParser = require("cookie-parser");
// Sets up the Express App
// =============================================================
var apiRouter = express();
var PORT = process.env.PORT || 8080;

//cookie parser
apiRouter.use(cookieParser(tokenSecret));

// Set Handlebars as the default templating engine.
apiRouter.engine("handlebars", exphbs({ defaultLayout: "main" }));
apiRouter.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
apiRouter.use(bodyParser.json());
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.text());
apiRouter.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
apiRouter.use(methodOverride("_method"));

// Routes =============================================================

var htmlRoutes = require("./routes/html-routes.js");
var apiRoutes = require("./routes/api-routes.js");
var authRoutes = require("./routes/auth-routes.js");

// API MIDDLEWARE
 //app.use("/api", jwtExp({ secret: tokenSecret }));
 apiRouter.use("/api", apiRoutes);


// AUTH MIDDLEWARE
 apiRouter.use("/auth", authRoutes);

// USER MIDDLEWARE
 apiRouter.get("/", jwtExp({
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

apiRouter.use("/", htmlRoutes);

apiRouter.use(express.static("./public"));



// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
    apiRouter.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
