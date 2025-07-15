/**
 * PlantSpecies.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    commonName: { type: 'string' },
    scientificName: { type: 'string', required: true, unique: true },
    description: { type: 'string' },
    photoUrl: { type: 'string' },
    sunlight: { type: 'string' },
    waterFrequencyDays: { type: 'number' },
    fertilizationFrequencyDays: { type: 'number' },
    nutrientNeeds: { type: 'string' },
    soilType: { type: 'string' },
    pruningMonth: { type: 'string' },
    pruningCount: { type: 'number' },
    flowerColor: { type: 'string' },
    floweringSeason: { type: 'string' },
    growthRate: { type: 'string' },
    careLevel: { type: 'string' },
    indoor: { type: 'boolean' },
    edible: { type: 'boolean' },
    medicinal: { type: 'boolean' },
    poisonous: { type: 'boolean' },

    userPlants: {
      collection: 'userplant',
      via: 'species'
    }
  }
};


