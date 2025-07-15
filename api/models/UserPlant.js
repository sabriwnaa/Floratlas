/**
 * UserPlant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nickname: { type: 'string' },
    isAvailableForExchange: { type: 'boolean', defaultsTo: false },
    notes: { type: 'string' },

    owner: {
      model: 'user',
      required: true
    },
    species: {
      model: 'plantspecies',
      required: true
    }
  }
};

