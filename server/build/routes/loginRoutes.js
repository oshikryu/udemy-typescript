"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n      <h1>You are logged in</h1>\n      <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n      <h1>You are NOT logged in</h1>\n      <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/login', function (req, res) {
    res.send("\n           <form method=\"POST\">\n            <div>\n              <label>Email</label>\n              <input name=\"email\" />\n            </div>\n            <div>\n              <label>Password</label>\n              <input name=\"password\" type=\"password\" />\n            </div>\n            <button>Submit</button>\n           </form>\n\n           ");
});
router.post('/login', function (req, res) {
    // request does not usually have a body or a session
    // middleware adds in special properties defined
    var _a = req.body, email = _a.email, password = _a.password;
    // hardcode email/pass creds
    if (email && password) {
        if (email === 'hi@hi.com' && password === 'hunter2') {
            // mark this person as logged in
            req.session = { loggedIn: true };
            // redirect to the root route
            res.redirect('/');
        }
    }
    else {
        res.send('Invalid email or password');
    }
    //res.send(`${email} ${password}`);
});
router.get('/logout', function (req, res) {
    req.session = { loggedIn: null };
    // redirect to the root route
    res.redirect('/');
});
