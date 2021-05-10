"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("<form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />      \n      </div>\n      <button>Submit</button>\n    </form>\n    ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // guard
    if (email &&
        password &&
        email === 'email@email.com' &&
        password === 'password') {
        // mark the person as logged in (sessions, cookies)
        req.session = { loggedIn: true };
        // redirect person to the root route
        res.redirect('/');
    }
    else {
        res.send('invalid email or password');
    }
});
// login
router.get('/', function (req, res) {
    // if the user is logged in (with guard req.session exists, otherwise we get an error)
    if (req.session && req.session.loggedIn) {
        res.send("<div>\n        <div>You are logged in!</div>\n        <a href=\"/logout\">Logout</a>\n      </div>");
    }
    else {
        res.send("<div>\n        <div>You are not logged in!</div>\n        <a href=\"/login\">Login</a>\n      </div>");
    }
});
// logout
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
