"use strict";

var catalyst = require("zcatalyst-sdk-node");
const express = require("express");
const expressApp = express();

expressApp.get("/", (req, res) => {
  var app = catalyst.initialize(req);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from index.js advanced io server.<h1>");
});

expressApp.get("/signup", (req, res) => {
  var app = catalyst.initialize(req);
  console.log(req.url);
  //This app variable is used to access the catalyst components.
  //You can refer the SDK docs for code samples.
  //Your business logic comes here

  //Create a JSON object for adding a new user
  const signupConfig = {
    platform_type: "web",
    // template_details: {
    //   senders_mail: "dogogetu@tutuapp.bid",
    //   subject: "Welcome to %APP_NAME% ",
    //   message:
    //     "<p>Hello ,</p> <p>Follow this link to join in %APP_NAME% .</p> <p><a href='%LINK%'>%LINK%</a></p> <p>If you didn't ask to join the application, you can ignore this email.</p> <p>Thanks,</p> <p>Your %APP_NAME% team</p>",
    //   redirect_url: "index.html", // The user will be directed to this page once they are authenticated. You can also provide mapped custom domains you configured as your invite URL.
    // },
  };
  var userConfig = {
    first_name: "mudaser",
    last_name: "sayeedi",
    email_id: "mudaser.sayeedi@pfc-group.com",
    // role_id: "3376000000159024",
  };

  let userManagement = app.userManagement();
  let registerPromise = userManagement.registerUser(signupConfig, userConfig);
  userManagement.registerPromise //Pass the JSON configration to the method
    .then((userDetails) => {
      //Returns a promise
      console.log(userDetails);
      res.redirect("http://localhost:3000/app/login.html");
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.split(",")[1] });
    });
});

// expressApp.get("/signin", (req, res) => {
//   var app = catalyst.initialize(req);
//   console.log(req.url);
//   //This app variable is used to access the catalyst components.
//   //You can refer the SDK docs for code samples.
//   //Your business logic comes here

//   //Create a JSON object for adding a new user
//   const signupConfig = {
//     platform_type: "web",
//     // template_details: {
//     //   senders_mail: "dogogetu@tutuapp.bid",
//     //   subject: "Welcome to %APP_NAME% ",
//     //   message:
//     //     "<p>Hello ,</p> <p>Follow this link to join in %APP_NAME% .</p> <p><a href='%LINK%'>%LINK%</a></p> <p>If you didn't ask to join the application, you can ignore this email.</p> <p>Thanks,</p> <p>Your %APP_NAME% team</p>",
//     redirect_url: "index.html", // The user will be directed to this page once they are authenticated. You can also provide mapped custom domains you configured as your invite URL.
//     // },
//   };
//   var userConfig = {
//     first_name: "mudaser",
//     last_name: "sayeedi",
//     email_id: "mudaser.sayeedi@pfc-group.com",
//     // role_id: "3376000000159024",
//   };

//   let userManagement = app.userManagement();
//   let registerPromise = userManagement.registerUser(signupConfig, userConfig);
//   //Pass the JSON configration to the method
//   registerPromise
//     .then((userDetails) => {
//       //Returns a promise
//       console.log(userDetails);
//       res.redirect("http://localhost:3000/app/login.html");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json({ message: err.split(",")[1] });
//     });
// });

expressApp.get("/resetPassword", (req, res) => {
  var app = catalyst.initialize(req);
  console.log(req.url);
  //This app variable is used to access the catalyst components.
  //You can refer the SDK docs for code samples.
  //Your business logic comes here

  //Create Config Object for the user
  const signupConfig = {
    platform_type: "web",
    // zaid: 10014774358,
    template_details: {
      //   senders_mail: "dogogetu@tutuapp.bid",
      //   subject: "Welcome to %APP_NAME% ",
      //   message:
      //     "<p>Hello ,</p> <p>Follow this link to join in %APP_NAME% .</p> <p><a href='%LINK%'>%LINK%</a></p> <p>If you didn't ask to join the application, you can ignore this email.</p> <p>Thanks,</p> <p>Your %APP_NAME% team</p>",
      redirect_url: "/login.html",
    },
  };
  var userConfig = {
    // first_name: "A",
    // last_name: "B",
    email_id: "mudaser.sayeedi@pfc-group.com",
  };

  //Pass the configuration to reset the password which in turn returns a promise
  let userManagement = app.userManagement();
  let resetPromise = userManagement.resetPassword(signupConfig, userConfig);
  resetPromise
    .then((response) => {
      console.log(response);
      res.redirect("http://localhost:3000/app/login.html");
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.split(",")[1] });
    });
});

module.exports = expressApp;

// module.exports = (req, res) => {
// 	var url = req.url;

// 	switch (url) {
// 		case '/':
// 			res.writeHead(200, { 'Content-Type': 'text/html' });
// 			res.write('<h1>Hello from index.js<h1>');
// 			break;
// 		default:
// 			res.writeHead(404);
// 			res.write('You might find the page you are looking for at "/" path');
// 			break;
// 	}
// 	res.end();
// };
