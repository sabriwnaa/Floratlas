/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    location: { type: 'string' },
    gardenType: { type: 'string' },
    sunlightExposure: { type: 'string' },
    soilType: { type: 'string' },
    humidityLevel: { type: 'string' },
    windExposure: { type: 'string' },

    userPlants: {
      collection: 'userplant',
      via: 'owner'
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    }
    
  }
};


