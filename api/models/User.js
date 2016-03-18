/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true
    },

    indeks: {
      type: 'string',
      unique: true
    },

    roles: {
      collection: 'Role',
      via: 'users'
    },

    //skills: {
      //collection: 'Skill',
      //via: 'skills'
    //}
  }
};

