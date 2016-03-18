/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var async = require('async');

module.exports = {
  register: function(req, res) {
    Role.find().exec(function(err, roles) {
      if(err) return res.serverError(err);

      return res.view('register', {
        roles: roles
      });
    });
  }
};

